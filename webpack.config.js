const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const microfrontendConfig = {
  entry: ['./src/polyfills.ts', './src/main.ts'],
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/microfrontend-features'),
    port: 5000,
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'body',
            },
          },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          context: path.resolve(__dirname, 'src/'),
          outputPath: 'assets',
          publicPath: 'assets',
          useRelativePaths: true,
          esModule: false,
        },
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'features',
      library: { type: 'var', name: 'features' },
      filename: 'remoteEntry.js',
      exposes: {
        Module: './src/app/features/features.module.ts',
      },
      shared: [
        '@angular/core',
        '@angular/common',
        '@angular/router',
        '@angular/material/card',
        '@angular/material/button',
      ],
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './tsconfig.app.json',
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    publicPath: 'https://red-wave-053790403.azurestaticapps.net',
    filename: '[id].[name].js',
    path: __dirname + '/dist/microfrontend-features',
    chunkFilename: '[id].[chunkhash].js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = [microfrontendConfig];
