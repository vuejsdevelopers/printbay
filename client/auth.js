import auth from "@websanova/vue-auth/drivers/auth/bearer";
import http from "@websanova/vue-auth/drivers/http/axios.1.x";
import router from "@websanova/vue-auth/drivers/router/vue-router.2.x";
import { ROUTE_NAME_HOME } from "@/constants";

export default {
  auth,
  http,
  router,
  loginData: {
    url: "/users/login",
    fetchUser: false,
    redirect: { name: ROUTE_NAME_HOME }
  },
  refreshData: { enabled: false },
  fetchData: { url: "/users" },
  parseUserData: data => data,
  registerData: {
    url: "/users",
    redirect: { name: ROUTE_NAME_HOME }
  },
  rolesVar: "role",
  logoutData: {
    url: "/users/logout",
    method: "GET",
    redirect: { name: ROUTE_NAME_HOME },
    makeRequest: true
  }
};
