import { createRouter, createWebHistory } from "vue-router"
import AboutLayout from "../layouts/AboutLayout/AboutLayout.vue"
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout.vue"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "DefaultLayout",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "HomeView",
          component: HomeView,
        },
      ],
    },

    {
      path: "/about",
      name: "AboutLayout",
      component: AboutLayout,
      children: [
        {
          path: "",
          name: "AboutView",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
})

export default router
