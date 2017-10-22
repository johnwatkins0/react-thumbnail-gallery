import path from 'path';
import webpack from 'webpack';

import pkg from './package.json';

const main = () => {
  const PROD = process.argv.includes('-p');
  const min = PROD ? '.min' : '';
  const plugins = [];

  if (PROD) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      })
    );
  }

  const entry = {};
  entry[pkg.name] = ['babel-regenerator-runtime', './src/index.js'];

  return {
    entry,
    output: {
      filename: `[name]${min}.js`,
      chunkFilename: '[id].chunk.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      library: 'ThumbnailGallery',
      libraryTarget: 'umd',
    },
    target: 'web',
    plugins,
    externals: {
      'react': {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'react',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'react-dom',
      },
      'prop-types': {
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'prop-types',
        root: 'prop-types',
      },
      'styled-components': {
        commonjs: 'styled-components',
        commonjs2: 'styled-components',
        amd: 'styled-components',
        root: 'styled-components',
      },
    },
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
  };
};

export default main;
