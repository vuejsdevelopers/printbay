import Router from "vue-router";
import {
  ROUTE_NAME_CART,
  ROUTE_NAME_HOME,
  ROUTE_NAME_ITEM,
  ROUTE_NAME_LOGIN,
  ROUTE_NAME_REGISTER,
  ROUTE_NAME_SELL,
  ROUTE_NAME_FORBIDDEN,
  ROUTE_NAME_NOT_FOUND,
  ROUTE_NAME_INTERNAL_SERVER_ERROR,
  ROUTE_NAME_PROFILE,
  ROUTE_NAME_EDIT
} from "@/constants";

export default new Router({
  mode: "history",
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: ROUTE_NAME_HOME,
      component: () => import("@views/Home")
    },
    {
      path: "/items/:id",
      name: ROUTE_NAME_ITEM,
      component: () => import("@views/Item")
    },
    {
      path: "/cart",
      name: ROUTE_NAME_CART,
      component: () => import("@views/Cart"),
      meta: { auth: ["user"] }
    },
    {
      path: "/login",
      name: ROUTE_NAME_LOGIN,
      component: () => import("@views/Auth"),
      meta: { auth: false }
    },
    {
      path: "/register",
      name: ROUTE_NAME_REGISTER,
      component: () => import("@views/Auth"),
      meta: { auth: false }
    },
    {
      path: "/sell",
      name: ROUTE_NAME_SELL,
      component: () => import("@views/Sell"),
      meta: { auth: ["admin"] }
    },
    {
      path: "/profile",
      name: ROUTE_NAME_PROFILE,
      component: () => import("@views/Profile"),
      meta: { auth: ["admin"] }
    },
    {
      path: "/403",
      name: ROUTE_NAME_FORBIDDEN,
      component: () => import("@views/Forbidden")
    },
    {
      path: "/404",
      name: ROUTE_NAME_NOT_FOUND,
      component: () => import("@views/NotFound")
    },
    {
      path: "/500",
      name: ROUTE_NAME_INTERNAL_SERVER_ERROR,
      component: () => import("@views/InternalServerError")
    },
    {
      path: "/items/:id/edit",
      name: ROUTE_NAME_EDIT,
      component: () => import("@views/Sell"),
      meta: { auth: ["admin"] }
    }
  ]
});
