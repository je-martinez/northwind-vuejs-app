import { RouteRecordRaw } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";

export default {
  path: "/home",
  component: HomeLayout,
  children: [
    {
      path: "",
      name: "home",
      component: () =>
        import(
          /* webpackChunkName: "home" */ "@/modules/home/views/EntitiesAvailableView.vue"
        ),
    },
  ],
} as RouteRecordRaw;
