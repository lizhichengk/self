module.exports = {
    //publicPath: process.env.NODE_ENV === 'production'? 'onlinePath':'',
    //outputDir: 'dist',
    /* devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8888,
        https: false,
        proxy: {
            '/api':{
                target: 'http://localhost:4000'
            }
        }
    }, */
    //lintOnSave: process.env.NODE_ENV !== 'production',
    //productionSourceMap: process.env.NODE_ENV === 'production',
    /* configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
        } else {
          // 为开发环境修改配置...
        }
    }, */
    /* chainWebpack: config => {
        config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
            // 修改它的选项...
            return options
        })
    }, */
};