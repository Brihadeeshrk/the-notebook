const htmlWebpackPlugin = require("html-webpack-plugin");
//  now our products is running on 8081, so we change the port for this devServer to 8080. to avoid any conflicts

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
