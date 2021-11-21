module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'custom-property-no-missing-var-function': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
        ]
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/*.html',
        '**/*.svelte'
      ],
      customSyntax: 'postcss-html',
    }
  ],
  "ignoreFiles": [
    "node_modules/*",
    "src/static/**",
    "build/**",
    "dist/**",
    "src/**/*.module.scss"
  ]
}
