const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
      app: "./index.js",
      database: "./db.js"
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.js",
      publicPath: ""
    },
    mode: "production",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new WebpackPwaManifest({
        fingerprints: false,
        name: 'MyBudget Expense Tracker',
        short_name: 'MyBudget',
        description: 'An application that allows you to quickly and easily record and review your expenses at a glance.',
        background_color: '#01579b',
        theme_color: '#ffffff',
        'theme-color': '#ffffff',
        start_url: '/',
        icons: [
          {
            src: path.resolve(__dirname, 'icons/icon-512x512.png'),
            sizes: [72, 96, 128, 144, 152, 192, 384, 512]
          },
        ],
      }),
    ],
  };
  
  module.exports = config;
  