const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"],
          // },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: "/",
          name: "[path][name].[ext]?[fullhash]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    // dist 디렉토리를 웹 서버의 기본 호스트 위치로 설정
    contentBase: path.join(__dirname, "public"),
    // publicPath: "/",
    host: "localhost",
    overlay: true,
    inline: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  },
};
