import path from 'path';

const main = () => {
  const PROD = process.argv.includes('-p');
  const min = PROD ? '.min' : '';
  const entry = ['babel-regenerator-runtime', './example/index.js'];

  return {
    entry,
    output: {
      filename: `[name]${min}.js`,
      path: path.resolve(__dirname, 'example/dist'),
      chunkFilename: `[id].[chunkhash].bundle${min}.js`,
      publicPath: 'http://react-thumbnail-gallery.johnwatkins0.me/example/dist/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['react', 'env', 'stage-0'],
                plugins: ['transform-decorators-legacy'],
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: { loader: 'file-loader', options: { publicPath: '' } },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: { loader: 'file-loader', options: { publicPath: '' } },
        },
      ],
    },
    target: 'web',
    devtool: 'source-maps',
  };
};

export default main;
