const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const externals = {
    wp: "wp",
    react: "React",
    "react-dom": "ReactDOM",
};

const isProduction = process.env.NODE_ENV === "production";
const mode = isProduction ? "production" : "development";

module.exports = {
    mode,
    entry: {
        front: ["./css/style.scss"],
        editor: ["./css/editor.scss"],
        blockbuild: ["./block.js"]
    },
    output: {
        path: __dirname,
        filename: "[name].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
};