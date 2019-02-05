import { css } from "docz-plugin-css";

export default {
  title      : "React Boilerplate with Typescript and ES tooling",
  description: 
    "Typescript, React, Webpack 4, Babel 7, Jest, Cypress, Sass, PostCSS, ESLint, Prettier, Docz.",
  theme      : "docz-theme-default",
  themeConfig: {
    colors: {
      primary: "tomato",
    },
  },
  src : "./docs",
  dest: "./dist/docs",
  //base      : "/",
  typescript: true,
  //mdPlugins : [],
  //hastPlugins: [],
  plugins: [
    css({
      preprocessor: "sass",
      cssmodules  : true,
    }),
  ],
};

/*
mdPlugins: 


hastPlugins: 

*/
