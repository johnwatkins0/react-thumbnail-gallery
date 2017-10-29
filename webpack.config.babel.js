import path from 'path';

import pkg from './package.json';

const main = () => {
  const PROD = process.argv.includes('-p');
  const min = PROD ? '.min' : '';

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
