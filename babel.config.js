module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                debug      : true,
                useBuiltIns: "usage",
                targets    : {
                    node    : "current",
                    browsers: ["last 2 versions"]
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins: ["babel-plugin-styled-components", "react-hot-loader/babel"],
    exclude: ["node_modules"]
};
