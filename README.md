---
author: Sebastian Pieczynski
date: 2019.01.03
keywords: react, typescript, babel, webpack, jest, eslint, jest-eslint-runner, jest-runner-tsc
---

I love good tools and love building them so here is another boilerplate based on the ideas from Kent C. Dodds. Mainly from videos about Jest runners and wanting to have all standard tools configured with Typescript.

This boilerplate tries to achive Typescript compatibility with React development while retaining all functionality of standard JS tools like ESlint, Babel and Webpack.

# Goal

Typescript used only for typechecking, React development with Jest and (hopefully) Cypress as testing environment. All transpiled by Babel 7 and packaged with Webpack 4. ESLint for static code linting.

# What works

-   Typescript,
-   Jest,
-   Jest runners:
    -   ESLint,
    -   StyleLint (css, scss),
    -   TSC,
    -   Tests,
-   Eslint,
-   Stylelint (recommended settings)
-   React,
-   Babel,
-   Babel Polyfills based on usage,
-   Webpack,
-   Web Dev Server.
-   HMR for React should work.
-   SASS in webpack.

# WIP

-   webpack - it can be optimized or improved.
-   Emotion.
-   Cypress.
-   suggestions?

PS. this is probably trivial for most experienced devs, but I have not found such project on the web so here it is. It took too long to make this work so I hope someone finds it useful.

I will be most grateful for suggestions as I am learning all the tools while building this.

# Thank you

At some point in this journey I stumbled upon these articles and they did help clarify one thing or another or were source of inspiration:

-   Kent C. Dodds - YouTube channel and testingjavascript.com
-   https://blog.wax-o.com/2018/05/webpack-loaders-babel-sourcemaps-react-hot-module-reload-typescript-modules-code-splitting-and-lazy-loading-full-tutorial-to-transpile-and-bundle-your-code/
-   https://developerhandbook.com/webpack/webpack-4-from-absolute-scratch/
-   https://www.thebasement.be/working-with-babel-7-and-webpack/
-   https://medium.com/@zural143/basic-webpack-4-and-es5-to-es6-transpiler-using-babel-dc66e72c86c6
-   http://artsy.github.io/blog/2017/11/27/Babel-7-and-TypeScript/
-   https://www.valentinog.com/blog/react-webpack-babel/
-   https://github.com/g-plane/pluggable-babel-eslint
