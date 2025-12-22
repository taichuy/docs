param([string]$targetDir)

if (-not (Test-Path $targetDir)) { 
    Write-Error "Target directory does not exist: $targetDir"
    exit 1
}

Write-Host "Scanning for Markdown files in $targetDir..."

Get-ChildItem -Path $targetDir -Recurse -Filter *.md | ForEach-Object {
    $path = $_.FullName
    $content = Get-Content $path -Raw -Encoding UTF8
    $original = $content

    # Fix Markdown links: ](folder.assets/...)
    $content = [Regex]::Replace($content, '\]\(([^)]+)\)', { param($m)
        $url = $m.Groups[1].Value
        # Only process if it looks like an assets path (contains .assets/)
        if ($url -notmatch '\.assets/') { return $m.Value }
        # If starts with http or /, ignore
        if ($url -match '^(http|/)') { return $m.Value }
        # If starts with ./, return as is (already correct)
        if ($url -match '^\./') { return $m.Value }
        # Otherwise, prepend ./
        return '](./' + $url + ')'
    })

    # Fix HTML src: src="folder.assets/..."
    $content = [Regex]::Replace($content, 'src=([''"])([^''"]+)([''"])', { param($m)
        $quote = $m.Groups[1].Value
        $url = $m.Groups[2].Value
        # Only process if it looks like an assets path (contains .assets/)
        if ($url -notmatch '\.assets/') { return $m.Value }
        # If starts with http or /, ignore
        if ($url -match '^(http|/)') { return $m.Value }
        # If starts with ./, return as is (already correct)
        if ($url -match '^\./') { return $m.Value }
        # Otherwise, prepend ./
        return 'src=' + $quote + './' + $url + $quote
    })

    # Clean up any accidental double prefixes like ././ or ./././
    # We loop until no more double dots are found to be safe
    while ($content -match '\]\(\./\./') { $content = $content -replace '\]\(\./\./', '](./' }
    while ($content -match 'src=["'']\./\./') { $content = $content -replace 'src=([''"])\./\./', 'src=$1./' }

    if ($content -ne $original) {
        Write-Host "Fixed paths in: $path"
        Set-Content -Path $path -Value $content -Encoding UTF8
    }
}
