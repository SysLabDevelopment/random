// const path = require('path');

module.exports = {
    root: true,
    extends: ['./eslint.fixable', 'prettier', 'prettier/react'],
    plugins: ['prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        // project: path.resolve(__dirname, './tsconfig.json'),
        // tsconfigRootDir: __dirname,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {
        window: true,
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
