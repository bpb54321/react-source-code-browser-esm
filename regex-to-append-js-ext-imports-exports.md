# Regular Expression to append .js to import and export specifiers

The React source code uses import and export source specifiers without any file extension, as this is supported in Node.js environments and with bundlers.

However, in the browser, you must specify a file extension.

I therefore need a regular expression which I can use in the editor's Find and Replace feature to find all the source specifiers in the react source code and append the .js file extension to them.

Exceptions: I need to skip bare package specifiers, because I can use import maps to point the browser to an index.js file for those.

```javascript
// Example import and export statements where I'd like to append a .js at the end of the source specifier.

// Before
export { createRoot, hydrateRoot, version } from "./src/client/ReactDOMClient";

// After
export {
  createRoot,
  hydrateRoot,
  version,
} from "./src/client/ReactDOMClient.js";

// Before
import { createRoot, hydrateRoot } from "./ReactDOMRoot";

// After
import { createRoot, hydrateRoot } from "./ReactDOMRoot.js";

// Before
import {
  injectIntoDevTools,
  findHostInstance,
} from "react-reconciler/src/ReactFiberReconciler";

// After
import {
  injectIntoDevTools,
  findHostInstance,
} from "react-reconciler/src/ReactFiberReconciler.js";

// Exceptions

// When a source specifier is just a single package, as in the following examples, I don't want to append the .js to the end of the source specifier.

// Examples
import * as IsomorphicReactPackage from "react"; // Leave this untouched

// If a source specifier already has .js file extension, ignore
// This prevents multiple extensions .js.js.js from being appended on multiple Find and Replace operations

import { createRoot, hydrateRoot } from "./ReactDOMRoot.js"; // Leave this untouched
```

## Solution

Credits:

- Chat GPT
- [RegExr](https://regexr.com/)
- Myself

Find:

```
(from\s'[\w\.-]+\/+[\w\/]+)(?<!\.js)'
```

Replace:

```
$1.js'
```

Files to include:

./react-packages

Files to exclude

```
**/__tests__,*.md
```
