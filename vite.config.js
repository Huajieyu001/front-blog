import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  
  // 添加安全优化配置
  build: {
    // 关闭 source map（防止源码泄露）
    sourcemap: false,
    
    // 最小化混淆配置
    minify: 'terser', // 使用 Terser 进行代码压缩和混淆
    terserOptions: {
      compress: {
        drop_console: true,     // 移除所有 console.log
        drop_debugger: true,     // 移除 debugger
        pure_funcs: [            // 移除特定函数
          'console.info',
          'console.warn',
          'console.debug'
        ]
      },
      format: {
        comments: false          // 移除所有注释
      },
      mangle: false
    },
    
    // 文件分割策略（增加分析难度）
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 将 node_modules 中的依赖分割到单独的 chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // 生产环境移除未使用的 CSS
    cssCodeSplit: true,
    cssTarget: 'chrome80'
  }
});