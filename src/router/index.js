import { createRouter, createWebHistory } from "vue-router"
import AboutLayout from "../layouts/AboutLayout/AboutLayout.vue"
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout.vue"
import HomePage from "../views/HomePage.vue"
import auth from "./middleware/auth"
import middlewarePipeline from "./middlewarePipe"

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "HomePage",
        component: HomePage,
        meta: {
          middleware: [auth],
        },
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
        name: "AboutPage",
        component: () => import("../views/AboutPage.vue"),
        meta: {
          middleware: [auth],
        },
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    redirect: { name: "PageHome" },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    // store,
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router
