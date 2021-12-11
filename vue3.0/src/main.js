import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";
import store from "./store";

registerMicroApps([
  {
    name: "react app",
    entry: "//localhost:3000/",
    container: "#container",
    activeRule: "/react",
  },
  {
    name: "vue app",
    entry: "//localhost:8080/",
    container: "#container",
    activeRule: "/vue",
  },
]);

start();
createApp(App).use(store).use(router).mount("#app");
