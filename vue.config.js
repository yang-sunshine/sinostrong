module.exports = {
    devServer: {// 设置代理
        proxy: {
            "": {
                target: "http://114.215.254.30:8080/welearning/api/", // 访问数据的计算机域名
                ws: true,
                changOrigin: true//开启代理
            }
        }
    }
};