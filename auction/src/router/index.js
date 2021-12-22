import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Home-Registre/Login.vue"),
  },
  {
    path: "/register",
    name: "Registre",
    component: () => import("../components/Home-Registre/Registre.vue"),
  },
  {
    path: "/create",
    name: "CreateEvents",
    component: () => import("../components/Home-Events/Create-event.vue"),
  },
  {
    path:"/nregistre",
    name:"NavbarRegistre",
    component: () => import("../components/Home-Registre/Navbar-regitre.vue")
  }
  ,
  {
    path: "/auction",
    name: "/Room",
    component: () => import("../components/Home-Events/Room.vue")
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    component: () => import("../../src/components/Home-Events/About-us.vue"),
  },
  {
    path: "/navbarevent",
    name: "NavbarEvents",
    component: () =>
      import("../../src/components/Home-Events/Navbar-event.vue"),
  },
  {
    path: "/buy",
    name: "Buy",
    component: () => import("../components/Home-Events/Buy.vue"),
  },
  {
    path: "/sell",
    name: "Sell",
    component: () => import("../components/Home-Events/Sell.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
