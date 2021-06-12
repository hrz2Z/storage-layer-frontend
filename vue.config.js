// vue.config.js
module.exports = {
    // 部署应用包时的基本 URL.默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
    // publicPath: '/'  

    devServer: {
        port: 8001,  // 端口，如果端口被占用紫红提升1
        open: true,  // 启动服务后自动打开浏览器
        https: false, // 协议
        host: 'localhost' // 主机名，也可以是127.0.0.1，或者真机测试的时候0.0.0.0
    },

    lintOnSave: false, // 默认为true，警告仅仅会被输出到命令行，且不会使得编译失败。

    productionSourceMap: false,  // 打包时，不生成.map文件，加快打包

  }