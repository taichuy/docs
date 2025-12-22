@echo off
setlocal

REM ============================================================================
REM Script: move_images.bat
REM Description: Scans Markdown files in the specified directory (default: docs)
REM              and converts asset paths to relative paths (prepends ./)
REM              to satisfy dumi/webpack requirements.
REM ============================================================================

REM Default target directory is the docs folder in the current directory
set "TARGET_DIR=%CD%\docs"

REM If a parameter is provided, use it as the target directory
if not "%~1"=="" set "TARGET_DIR=%~1"

echo Processing files in: %TARGET_DIR%

REM Check if fix_paths.ps1 exists
if not exist "%~dp0fix_paths.ps1" (
    echo Error: fix_paths.ps1 not found in the script directory.
    exit /b 1
)

REM Execute the PowerShell script
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0fix_paths.ps1" -targetDir "%TARGET_DIR%"

echo Done.
endlocal
