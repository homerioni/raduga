module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'react-hooks',
    'babel',
    'import',
    'simple-import-sort',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/static-property-placement': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'global-require': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['crossorigin'],
      },
    ],
    'import/no-named-as-default': 'off',
    'no-restricted-exports': 'off',
    'react/state-in-constructor': 'off',
    'react/prop-types': 'off',
    'arrow-parens': 'off',
    'func-names': 'off',
    'object-curly-newline': 'off',
    curly: [2, 'all'],
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'function-paren-newline': 'off',
    'no-irregular-whitespace': 'off',
    'space-before-function-paren': 0,
    'react/function-component-definition': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignorePattern: '^(im|ex)port .*',
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-alert': 'error',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-cycle': [
      0,
      {
        ignoreExternal: true,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    'react/no-array-index-key': 'off',
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
      },
    ],
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-var-requires': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            '^next',
            '^@?\\w',
            // Side effect imports.
            '^\\u0000',
            // Relative features and modules.
            '^~features/\\w',
            '^~\\w',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // Style imports.
            '^.+\\.s?css$',
          ],
        ],
      },
    ],
  },
};
