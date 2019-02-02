//import { myCoolPlugin } from "docz-plugin-mycoolplugin";

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
  src       : "./docs",
  dest      : "./dist/docs",
  typescript: true,
  mdPlugins : [
    // TODO: configure the plugins
    // "remark-abbr",
    //"remark-autolink-headings",
    // "remark-code-screenshot",
    // "remark-emoji",
    // "remark-emoji-to-gemoji",
    // "remark-gemoji",
    // "remark-github",
    // "remark-graphviz",
  ],
  hastPlugins: [
    // "rehype-prism"
  ],
  //plugins: [myCoolPlugin()],
};
