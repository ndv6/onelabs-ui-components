// babel.config.js
module.exports = function (api) {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = ['@babel/plugin-transform-typescript'];
  return {
    presets,
    plugins,
  };
};