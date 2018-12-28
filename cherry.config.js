module.exports = {
    title: 'cherry-doc 使用说明', // 文档标题
    root: './doc', // md 存放目录
    ext: '.md', // md 后缀名
    hotreload:true,
    category: [
        'line'
    ],
    server: {
        port: 8000,  // server port
        middleware: []
    },
};