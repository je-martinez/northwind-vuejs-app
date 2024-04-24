import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/modules/shared/layouts/MainLayout.vue";

export default {
  path: "/entities",
  component: MainLayout,
  children: [
    {
      path: "categories",
      name: "categories",
      component: () =>
        import(
          /* webpackChunkName: "categories" */ "@/modules/entities/views/CategoriesView.vue"
        ),
    },
  ],
} as RouteRecordRaw;
