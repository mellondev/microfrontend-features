const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const common = require('./webpack.common.js');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  entry: ['./src/polyfills.ts', './src/main.prod.ts'],
  mode: 'production',
  plugins: [
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './tsconfig.app.prod.json',
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule'),
    }),
  ],
  output: {
    publicPath: 'https://red-wave-053790403.azurestaticapps.net/',
  },
});
