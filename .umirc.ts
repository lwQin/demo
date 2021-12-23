import { defineConfig } from 'umi';

export default defineConfig({
  chainWebpack(memo) {
    memo.output.filename('js/[name].[contenthash].js').chunkFilename('js/[name].[contenthash].async.js');
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  mfsu: {},
});
