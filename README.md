---
author: Sebastian Pieczynski
date: 2019.01.03
keywords: react, typescript, babel, webpack, jest, eslint, jest-eslint-runner, jest-runner-tsc
---

# TL;DR

**Not ready for production / Alpha version, use at your own risk. / There be bugs here.**

This setup tries to achieve Typescript compatibility with React development while retaining all functionality of standard JS tools like ESlint, Babel and Webpack - no use of ts-lint, ts-loaders or ts-jest (although that one might be beneficial to use).

**PRs are very welcome.**

# installation

Clone this repository and run `yarn install`. All dependencies are local to this environment except for Typescript that you must install globally.

If you don't want to use pre-commit hooks for git, just clear the "pre-commit" command in package.json.

# why?

I love good tools and love building them. I also wanted to learn React/JS/Testing properly so I decided to get all the best tools available for JS/React etc. and combine them into a coherent package. This proved to be more difficult and exciting than it looked like. I was inspired by Kent C. Dodds to use TypeScript for type checking only and have all other tools from pure JS ecosystem. It started with videos about Jest runners and then I "overengineered" the starter package.

# goal

Typescript used only for type checking, React development with Jest and Cypress as testing environment. All transpiled by Babel 7 and packaged with Webpack 4. ESLint/Stylelint for static code linting. Prettier for code style and some quality of life packages.

# the stack

## what works

- Typescript,
- Jest,
- Jest runners:
  - ESLint,
  - StyleLint (css, scss) with Prettier compatibility,
  - Type Checking via TSC,
  - Tests,
- Prettier rules,
- Eslint,
- Stylelint,
- React,
- Babel,
- Babel polyfills based on usage,
- Webpack,
- Web Dev Server.
- HMR.
- React Testing Library.
- SCSS (and other non-js files) module import in tests.
- Git precommit hooks running tests.

## what is not tested yet

- Emotion.

## Must be done before tagging 1.0

- Cleanup regexp rules for consistency.
- Add comments to options so it is clear why they must be setup as they are.
- Refactor Jest configuration (move common settings to jest.common.conf.js and reuse it).
- Create documentation for the setup.

## TODO

- Add Documentation links for all used packages so configuration changes are easier.

## Future Plans

- webpack - it can be optimized or improved.
- Example app using all of the above.
- Material UI 4 (Start of Q2 2019)
- Create example React application with hooks and testing best practices (Start of Q2 2019)
- GraphQL? (Apollo/Prisma?).

## Known Bugs

### Tests fail with `TypeError: Cannot read property 'some' of undefined`

The error when running tests that says:

`TypeError: Cannot read property 'some' of undefined` when tunning a `test` project and that points to babel `at rewriteModuleStatementsAndPrepareHeader (node_modules/@babel/helper-module-transforms/lib/index.js:115:44)` happens only when using `--runInBand` with `--no-cache` combination.

If your tests are failing please remove either of these flags. Your tests will pass. I assume this is a bug in Jest.

### Loading CSS files in Typescript

Loading SCSS works, but if you try loading CSS files the build will break. This is webpack configuration issue I am certain, but at the moment I do not have the capacity or need to deal with this. I will appreciate help if it is offered.

### Cypress and Chrome Enterprise

Runnning Cypress with Chrome Enterprise version that has settings locked (at this moment I do not know which) can make code like this:

```js
describe("Smoke ping Homepage", function() {
  it("Visits the Home Page", function() {
    cy.visit("http://localhost:8080");
    cy.get("h1");
  });
});
```

Show only HTML page without any resources/js files loaded.

At this moment a workaround is in place and Cypress is configured to use built-in Electron browser to run the tests.

# Thank you

At some point in this journey I stumbled upon these articles and they did help clarify one thing or another or were source of inspiration:

- Kent C. Dodds - YouTube channel and testingjavascript.com
- https://wanago.io/2018/07/16/webpack-4-course-part-two-webpack-4-course-part-two-loaders/
- https://blog.wax-o.com/2018/05/webpack-loaders-babel-sourcemaps-react-hot-module-reload-typescript-modules-code-splitting-and-lazy-loading-full-tutorial-to-transpile-and-bundle-your-code/
- http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/#importing-modules-without-type-declarations
- https://www.typescriptlang.org/docs/handbook/module-resolution.html
- https://developerhandbook.com/webpack/webpack-4-from-absolute-scratch/
- https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/
- https://www.thebasement.be/working-with-babel-7-and-webpack/
- https://medium.com/@zural143/basic-webpack-4-and-es5-to-es6-transpiler-using-babel-dc66e72c86c6
- http://artsy.github.io/blog/2017/11/27/Babel-7-and-TypeScript/
- https://medium.com/oredi/webpack-with-babel-7-b61f7caa9565
- https://www.valentinog.com/blog/react-webpack-babel/
- https://codeburst.io/webpack-typescript-react-part-1-dc154e250f23
- https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a
- https://github.com/g-plane/pluggable-babel-eslint
- https://basarat.gitbooks.io/typescript/docs/project/tsconfig.html
- http://2ality.com/2017/02/babel-preset-env.html
- All package owners and supporters.
- http://www.pro-react.com/materials/appendixA/

Post configuration links:

- https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a
- https://www.valentinog.com/blog/webpack-tutorial/
- http://jsconfig.com/guide-setup-webpack4-development-production/
