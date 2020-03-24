import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/company",
    name: "Company",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Company.vue")
  },
  {
    path: "/solutions",
    name: "Solutions",
    component: () => import("@/views/Solutions.vue")
  },
  /*{
    path: "/experience",
    name: "Experience",
    component: () => import("@/views/Experiences.vue")
  },*/
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/Products.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue")
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
