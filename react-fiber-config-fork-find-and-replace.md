# ReactFiberConfig fork find and replace
The React reconciler has different implementations of the
reconciler depending on what environment React is running in.
This is referred to as "forks", because you fork down a
specific path depending on your environment.

This forking is normally part of the build process, but
we had to do it manually with a find and replace here.

Find:

ReactFiberConfig.js

Replace:

forks/ReactFiberConfig.dom.js

Files to include:

./react-packages/react-reconciler/src

Files to exclude:

`**/__tests__,*.md`