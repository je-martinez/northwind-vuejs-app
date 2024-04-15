import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { homeRouter } from "@/modules/home/router";

const routes: Array<RouteRecordRaw> = [
  {
    ...homeRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
