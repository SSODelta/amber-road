import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import List from "../views/List.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "List",
        component: List,
        // Lazy-loading example
        // component: () =>
        //     import(/* webpackChunkName: "about" */ "../views/List.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
