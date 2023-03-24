import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),svgBuilder('./src/assets/icons/') // 入，无需再单独导入
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '@': resolve(__dirname, 'src'),
    }
  },
  server: {
    host: '0.0.0.0', //ip地址
    port: 8080, //端口号
    open: false ,//启动后是否自动打开浏览器,
    proxy: {
      '/api': {
        target: "https://api.gmit.vip/api",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将请求中/api用空值替换重写，根据实际业务修改
      },
      '/bpi':{
        target: "https://v1.jinrishici.com/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/bpi/, '') // 将请求中/api用空值替换重写，根据实际业务修改
      }
    }
  },
  //配置文件扩展名
  extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
})
