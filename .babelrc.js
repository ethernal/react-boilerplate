module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false,
                debug  : true,
                targets: {
                    browsers: ["last 2 versions"]
                }
            }
        ],
        "@babel/react",
        "@babel/preset-typescript"
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "react-hot-loader/babel",
        "babel-plugin-styled-components",
        "plugin-proposal-class-properties"
    ]
};
