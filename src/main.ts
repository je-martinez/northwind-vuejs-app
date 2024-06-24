import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/v1";
import { createIntl } from "vue-intl";
import "./assets/css/tailwind.css";

createApp(App)
  .use(store)
  .use(router)
  .use(
    createIntl({
      locale: "en",
      defaultLocale: "en",
      messages: {
        foo: "bar",
      },
    })
  )
  .mount("#app");
