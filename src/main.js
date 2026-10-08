import "./assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";
import reveal from "./directives/reveal";

// The old site had separate pages; their addresses now jump to the matching section.
const OLD_PAGES = { "/classes": "#classes", "/cards": "#creatures", "/roadmap": "#journey", "/copyright": "#community" };
const target = OLD_PAGES[location.pathname.replace(/\/$/, "")];
if (target) history.replaceState(null, "", `/${target}`);
else if (location.pathname !== "/" && !location.pathname.startsWith("/media/")) history.replaceState(null, "", "/" + location.hash);

createApp(App).directive("reveal", reveal).mount("#app");

if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
