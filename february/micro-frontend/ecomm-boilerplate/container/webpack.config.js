const htmlWebpackPlugin = require("html-webpack-plugin");
// this is a host file
// importing module federation plugin to import files from remotes
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  //  now our products is running on 8081, so we change the port for this devServer to 8080. to avoid any conflicts
  devServer: {
    port: 8080,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // creating a new instance of mfp
    new moduleFederationPlugin({
      // what is the name of this mfe?
      name: "container",
      // so what all remotes do we have? again in key:value pair
      // notice after localhost:8081, we can see the 'filename' manifest we set in remotes/webpack.config.js
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
        // products@ -> the term products is the name of the remote in product/webpack.config.js
        // if the name is diff, this file wont load

        // the same applies for cart
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
  ],
};
