module.exports = {
  extends: '@it-incubator/eslint-config',
  rules: {
    'react/no-unknown-property': [
      'error',
      { ignore: ['map','widthSegments','heightSegments','emissive','emissiveIntensity', 'attachArray','material','wireframe',"aoMap", 'aoMapIntensity', 'position', 'rotation', 'scale', "args", "intensity","alphaMap","transparent"] }, // Добавьте любые другие свойства, которые хотите игнорировать
    ],
  },
}