import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { createAuth0 } from "@auth0/auth0-vue";


const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-snv.us.auth0.com",
    client_id: "lOo9caevl7EMaEzMaRsA0rOt6sIgclmn",
    redirect_uri: window.location.origin,
    audience: "http://localhost:3000/okr2"
  })
);

app.use(store).use(router).mount("#app");
