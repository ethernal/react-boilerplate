module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                //debug  : true,
                targets: {
                    node    : "current",
                    browsers: ["last 2 versions"]
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins: ["babel-plugin-styled-components"],
    exclude: ["node_modules"]
};
