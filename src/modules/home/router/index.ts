import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/modules/ui/layouts/MainLayout.vue";

export default {
  path: "/home",
  component: MainLayout,
  children: [
    {
      path: "",
      name: "home",
      component: () =>
        import(
          /* webpackChunkName: "home" */ "@/modules/home/views/EntityListView.vue"
        ),
    },
  ],
} as RouteRecordRaw;
