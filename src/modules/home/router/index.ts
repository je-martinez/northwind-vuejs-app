import { RouteRecordRaw } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";

export const homeRouter: RouteRecordRaw = {
  path: "/",
  name: "home",
  component: HomeLayout,
  children: [
    {
      path: "",
      name: "home",
      component: () =>
        import(
          /* webpackChunkName: "home" */ "@/modules/home/views/SectionsAvailableView.vue"
        ),
    },
  ],
};
