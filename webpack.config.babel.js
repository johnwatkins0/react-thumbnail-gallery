import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import packageJson from './package.json';

const main = (envArgs) => {
  const env = envArgs || {};
  const PROD = process.argv.includes('-p');
  const watching = process.argv.includes('--watch');
  const min = PROD ? '.min' : '';
  const plugins = [new ExtractTextPlugin(`${packageJson.name}${min}.css`)];

  if (PROD) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
      })
    );
  }

  if (!watching) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
  }

  let entry = './src/index.js';
  let filename = `${packageJson.name}${min}.js`;

  if (env.wordpress) {
    entry = './src/index.wordpress.js';
    filename = `${packageJson.name}${min}.wordpress.js`;
  }

  if (env.dataAttributes) {
    entry = './src/index.dataAttributes.js';
    filename = `${packageJson.name}${min}.dataAttributes.js`;
  }

  return {
    entry,
    output: {
      filename,
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: { presets: ['react', 'es2015', 'stage-1'] },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]',
                },
              },
              { loader: 'postcss-loader' },
              { loader: 'sass-loader' },
            ],
          }),
        },
      ],
    },
    externals: {
      'prop-types': 'PropTypes',
    },
    target: 'web',
    plugins,
    devtool: 'source-maps',
    resolve: {
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
      },
    },
  };
};

export default main;
