const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function(config) {

  // Add the loader second-to-last
  // (last one must remain as the "file-loader")
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.svg$/,
    loader: 'raw-loader'
  });

  // If not a spa, but a multiple html pages app, uncomment the following

  let pluginList = config.plugins;
  pluginList[1] = 
  new HtmlWebpackPlugin({
    inject: true,
    filename: 'index.html',
    template: path.resolve(__dirname, '.', 'public/index.html'),
  });
  pluginList.splice(1, 0, new HtmlWebpackPlugin({
      inject: true,
      filename: 'home.html',
      template: path.resolve(__dirname, '.', 'public/home.html'),
    }),);
  pluginList.splice(1, 0, new HtmlWebpackPlugin({
      inject: true,
      filename: 'bar-restaurant.html',
      template: path.resolve(__dirname, '.', 'public/bar-restaurant.html'),
    }),);
  pluginList.splice(1, 0, new HtmlWebpackPlugin({
      inject: true,
      filename: 'gallery.html',
      template: path.resolve(__dirname, '.', 'public/gallery.html'),
    }),);
  pluginList.splice(1, 0, new HtmlWebpackPlugin({
      inject: true,
      filename: 'rooms.html',
      template: path.resolve(__dirname, '.', 'public/rooms.html'),
    }),);
  pluginList.splice(1, 0, new HtmlWebpackPlugin({
      inject: true,
      filename: 'seminars.html',
      template: path.resolve(__dirname, '.', 'public/seminars.html'),
    }),);


}
