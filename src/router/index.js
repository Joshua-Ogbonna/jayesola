import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "@/views/SignUp";
import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";

// Dashboard child routes components
import Customer from "@/components/Customer";
import Automations from '@/components/Automations'
import Pipelines from '@/components/Pipelines'
import Reviews from '@/components/Reviews'
import Reporting from '@/components/Reporting'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard/",
    name: "Dashboard",
    component: Dashboard,
    // Children routes
    children: [
      { path: "/dashboard", component: Customer },
      { path: "reviews", component: Reviews },
      { path: "pipeline", component: Pipelines },
      { path: "automations", component: Automations },
      { path: "reporting", component: Reporting },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
