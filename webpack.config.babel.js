import path from 'path';
import webpack from 'webpack';

import pkg from './package.json';

const main = () => {
  const PROD = process.argv.includes('-p');
  const min = PROD ? '.min' : '';
  const plugins = [];
  const entry = ['babel-regenerator-runtime', './src/index.js'];
  const filename = `${pkg.name}${min}.js`;

  if (PROD) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
      })
    );
  }

  return {
    entry,
    output: {
      filename,
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: `[id].[chunkhash].bundle${min}.js?v=${pkg.version}`,
      publicPath: '/dist/',
    },
    target: 'web',
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  'react',
                  [
                    'env',
                    {
                      targets: {
                        browsers: ['> 1%', 'last 5 versions'],
                      },
                      debug: true,
                    },
                  ],
                  'stage-0',
                ],
              },
            },
          ],
        },
      ],
    },

    devtool: PROD ? false : 'source-maps',
  };
};

export default main;
