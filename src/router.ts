import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "home",
    meta: {
      title: "",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/Index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/api",
    name: "api",
    component: () => import("@/pages/OpenApi.vue"),
    meta: {
      title: "开放API",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
