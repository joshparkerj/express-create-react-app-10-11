module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // loader: 'awesome-typescript-loader',
        // loader: 'babel-loader',
        // loader: 'cache-loader',
        // loader: 'develop-loader',
        // loader: 'eslint-loader',
        // loader: 'extract-loader',
        // loader: 'html-loader',
        // loader: 'index-loader',
        // loader: 'inline-loader',
        // loader: 'json-loader',
        // loader: 'loader-runner',
        // loader: 'mini-css-extract-plugin',
        // loader: 'null-loader',
        // loader: 'postcss-loader',
        // loader: 'raw-loader',
        // loader: 'style-loader',
        // loader: 'style-loader!css-loader!postcss-loader',
        // loader: 'stylus-loader',
        // loader: 'switch-loader',
        // loader: 'thread-loader',
        // loader: 'url-loader',
        // loader: 'vue-loader',
        // loader: 'worker-loader',
        loader: 'swc-loader',
        options: {
          jsc: {
            parser: {
              jsx: true,
            },
          },
        },
      },
    ],
  },
};
