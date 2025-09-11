# React Source Code Browser ESM
The goal of this repo was to compile React source code so that I could run it in the browser and step through it with the Chrome DevTools debugger.

The following are the steps I took to achieve that. Each step is marked by a branch (step-1, step-2, etc)

## Step 1
- Attempt to create a Fiber Root with react-dom
- Copy-paste react-dom package
- Transpile with Babel

## Step 2
- [Regex to append .js to import/export specifiers](regex-to-append-js-ext-imports-exports.md)

## Step 3
- [Importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap)

## Step 4
- Copy other react packages on which react-dom depends

# Step 5
- Comment out Flow syntax that Babel can’t handle
-   `declare` statements
-   Generic types

# Step 6
- Run regex again to append .js extensions to import specifiers

# Step 7
- Manually replace [ReactFiberConfig](./react-packages/react-reconciler/src/ReactFiberConfig.js) by DOM fork

# Step 8
- Set global variables to false
-   Feature flag variables, __EXPERIMENTAL__
-   __DEV__ global variable

# Step 9
- Add basic App component
- Separate Babel config to transpile JSX
- Profit!

## Learning resources that can be used with this repo
- https://understandingreact.com/
- https://jser.dev/series/react-source-code-walkthrough



