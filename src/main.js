import { createRoot } from "../react-dist/react-dom/client.js";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
console.log(reactRoot);
