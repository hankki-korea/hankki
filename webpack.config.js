import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = {
  entry: ["@babel/polyfill", "./src/js/entry.js", "./src/sass/main.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/webpack.bundle.js",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/js")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader?outputStyle=expanded",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
};
