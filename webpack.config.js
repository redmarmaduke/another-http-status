// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const mjsConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist", "mjs"),
    filename: "./index.mjs",
    libraryTarget: "module"
  },
  experiments: {
    outputModule: true,
  },
};

const cjsConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist", "cjs"),
    filename: "./index.cjs",
    libraryTarget: "commonjs"
  }
};

module.exports = () => {
  return [cjsConfig, mjsConfig];
};
