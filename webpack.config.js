const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js|.jsx|.ts|.tsx$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [
      ".web.tsx",
      ".web.ts",
      ".tsx",
      ".ts",
      ".web.jsx",
      ".web.js",
      ".jsx",
      ".js",
    ], // read files in fillowing order
    alias: Object.assign({
      "react-native$": "react-native-web",
    }),
  },
};
