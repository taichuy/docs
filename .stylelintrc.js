module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  customSyntax: 'postcss-less',
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'alpha-value-notation': null,
    // Add these to fix "Unknown rule" if they are somehow default (unlikely, but safe to disable if needed, though they are unknown so disabling might also fail?)
    // Actually, unknown rules cause error in v16. We cannot "disable" them, we must ensure they are NOT in the config.
  },
  ignoreFiles: [
    'node_modules/**/*',
    'dist/**/*',
    '.dumi/tmp/**/*',
    'public/**/*',
  ],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        // Less specific overrides
        'at-rule-no-unknown': null,
        'media-query-no-invalid': null, // Fixes @mobile issue
        'function-no-unknown': null, // Fixes fadeout/fadein issue
        'no-invalid-position-at-import-rule': null, // Fixes @import (reference)
        'at-rule-prelude-no-invalid': null,
        'declaration-property-value-no-unknown': null,
      },
    },
  ],
};
