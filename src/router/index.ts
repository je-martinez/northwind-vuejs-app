import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homeRouter from "@/modules/home/router";
import entitiesRouter from "@/modules/entities/router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: { name: "home" },
  },
  {
    ...homeRouter,
  },
  { ...entitiesRouter },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ "@/modules/ui/views/NotFoundView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
