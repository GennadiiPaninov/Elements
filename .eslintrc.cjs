module.exports = {
  extends: '@it-incubator/eslint-config',
  rules: {
    'react/no-unknown-property': [
      'error',
      { ignore: ['position', 'rotation', 'scale', "args", "intensity"] }, // Добавьте любые другие свойства, которые хотите игнорировать
    ],
  },
}