module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'react-app',
    'react-app/jest',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.eslint.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          'scss',
          'css',
          'svg',
        ],
      },
    },
  },
  rules: {
    // To enable function expression for component → uncomment rule below
    // 'react/function-component-definition': [
    //   2,
    //   {
    //     namedComponents: 'arrow-function',
    //   },
    // ],
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': [0],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: [
          'CustomInputLabel',
        ],
        labelAttributes: [
          'label',
        ],
        controlComponents: [
          'CustomInput',
        ],
        depth: 3,
      },
    ],

  },
};
