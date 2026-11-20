import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => ({
  // GitHub Pages 项目站点部署在 /mystery-club-vue/ 子路径下，
  // 生产构建必须带上这个 base，否则打包出的资源会去根目录找而 404。
  // 本地开发仍用根路径，不影响 http://localhost:5174/ 预览。
  base: mode === 'production' ? '/mystery-club-vue/' : '/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
}));
