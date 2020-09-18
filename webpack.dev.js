const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const common = require('./webpack.common.js');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  entry: ['./src/polyfills.ts', './src/main.ts'],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/microfrontend-features'),
    port: 5000,
  },
  plugins: [
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './tsconfig.app.json',
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule'),
    }),
  ],
  output: {
    publicPath: 'http://localhost:5000/',
  },
});
