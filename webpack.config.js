module.exports = function startWebpack(env) {
  return require(`./webpack.${env}.js`);
};
