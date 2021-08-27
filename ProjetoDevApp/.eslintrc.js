module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-unused-vars': 'error',
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    indent: ['off', 2],
  },
};
