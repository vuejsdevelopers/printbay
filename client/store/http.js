import {
  ROUTE_NAME_LOGIN,
  ROUTE_NAME_FORBIDDEN,
  ROUTE_NAME_NOT_FOUND,
  ROUTE_NAME_INTERNAL_SERVER_ERROR
} from "@/constants";
import router from "../router";

export default {
  baseURL: "/",
  onError ({ response }) {
    switch (response.status) {
    case 401:
      router.push({ name: ROUTE_NAME_LOGIN });
      break;
    case 403:
      router.push({ name: ROUTE_NAME_FORBIDDEN });
      break;
    case 404:
      router.push({ name: ROUTE_NAME_NOT_FOUND });
      break;
    default:
      router.push({ name: ROUTE_NAME_INTERNAL_SERVER_ERROR });
    }
  },
  access_token () {
    try {
      return window.localStorage["default_auth_token"];
    } catch (err) {
      return "";
    }
  }
};
