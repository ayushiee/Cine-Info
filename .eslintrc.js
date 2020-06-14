module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        jest: true
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:import/errors'],
    rules: {
        // JS/TS RULES
        quotes: ['error', 'single'],
        camelcase: 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'import/newline-after-import': ['error', { count: 1 }],
        'semi': ['error', 'always'],
        'indent': ['error', 2],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-multi-spaces': 'error',
        'key-spacing': ['error', { beforeColon: false }],
        'object-shorthand': ['error', 'always'],
        // JSX RULES
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-indent': ['error', 2],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
        'react/jsx-no-literals': 'off',
        'react/jsx-space-before-closing': 'error',
    },
};
