const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VuetifyLoaderPlugin } = require('vuetify-loader')


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: PATHS.dist,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!style-loader!css-loader!sass-loader!vuetify-loader',
            'sass': 'vue-style-loader!style-loader!css-loader!sass-loader?indentedSyntax!vuetify-loader',
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|svg|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },  {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }]
  },

  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      "@": path.join(__dirname, "../src"),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {from: `${PATHS.src}/${PATHS.assets}icon`,
    //     to: `${PATHS.assets}icon`}
    //   ]
    // }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: 'index.html',
    }),
  ],
}
