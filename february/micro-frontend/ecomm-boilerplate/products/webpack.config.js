const htmlWebpackPlugin = require("html-webpack-plugin");
// this is a remote file
// importing the module federation plugin to make this mfe available to the container
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    // this html plugin, you might notice that, we are not using it in the host or in prod/dev
    // this html file is only used when we are building this appln in isolation
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // creating a new instance of this plugin
    new moduleFederationPlugin({
      // giving this remote a name
      name: "products",
      /**
       * what do you want the manifests name to be? better leave it as remoteEntry.js unless
       * you have good reasons to change
       */
      filename: "remoteEntry.js",
      // what do you want to expose to the container? enter in key: value format
      // We are providing aliases just to make it easier while importing files in the host
      exposes: {
        "./ProductsIndex": "./src/index",
      },
    }),
  ],
};
