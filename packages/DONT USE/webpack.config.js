const Path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: Path.resolve(__dirname,"lib"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
