import { createRoot } from "../react-dist/react-dom/client.js";
import App from './App.js'

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
console.log({reactRoot})
const appElement = <App />;
reactRoot.render(appElement);
