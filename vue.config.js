module.exports = {
  // 使用相对路径
  publicPath: './', 
  // 取消.map文件
  productionSourceMap: false, 

  //链式webpack配置
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 20480 }));
  },

  // 常式webpack配置
  configureWebpack: (config) => {
    config.devServer = {
      port: 9999,
      host: "0.0.0.0",
      https: false,
      open: true,
    };
    // config.optimization = {
    //   minimizer: [
    //     // 去除console.*
    //     new UglifyJsPlugin({
    //       uglifyOptions: {
    //         warnings: false,
    //         compress: {
    //           drop_console: true,
    //           drop_debugger: true
    //         },
    //       }
    //     })
    //   ]
    // }
  },
}