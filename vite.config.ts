import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
    plugins: [vue()],
    base: "./",
    resolve: {
        alias: {
            // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@views": path.resolve(__dirname, "./src/views"),
        },
    },
    build: {
        outDir: "dist",
        assetsDir: 'assets',
    },
    css: {
        postcss: {
            plugins: [
                require('postcss-px-to-viewport')({
                    unitToConvert: 'px',
                    viewportWidth: 375, //  设计稿的视口宽度
                    unitPrecision: 3, // 单位转换后保留的精度
                    propList: ['*'],
                    viewportUnit: 'vw',
                    fontViewportUnit: 'vw', // 字体使用的视口单位
                    selectorBlackList: [], // 需要忽略的CSS选择器
                    minPixelValue: 1,
                    mediaQuery: false,
                    replace: true,
                    exclude: undefined,
                    include: undefined,
                    landscape: false,
                    landscapeUnit: 'vw', // 横屏时使用的单位
                    landscapeWidth: 375 // 横屏时使用的视口宽度
                })
            ]
        }
    },
    server: {
        https: false, // 是否开启 https
        open: false, // 是否自动在浏览器打开
        port: 8080, // 端口号
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: "http://libo90.w3.luyouxia.net/oa-server/", // 后台接口
                changeOrigin: true,
                secure: false, // 如果是https接口，需要配置这个参数
                // ws: true, //websocket支持
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    // 引入第三方的配置
    optimizeDeps: {
        include: [],
    },
})
