import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Chat from "../views/Chat.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeView,
        },
        {
            path: "/chat/:id",
            component: Chat,
        },
    ],
});

export default router;
