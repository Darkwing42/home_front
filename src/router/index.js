import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Settings from "@/components/user/Settings";
import store from "../store";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/user",
      name: "Settings",
      component: Settings,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    }
  ]
});
