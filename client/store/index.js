import VuexORM from "@vuex-orm/core";
import Item from "@/store/models/Item";
import item from "@/store/modules/item";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import http from "@/store/http";
import createPersistedState from "vuex-persistedstate";

const database = new VuexORM.Database();
database.register(Item, item);

VuexORM.use(VuexORMAxios, {
  database,
  http
});

const VuexORMPlugin = VuexORM.install(database);

export default {
  plugins: [
    VuexORMPlugin,
    createPersistedState()
  ]
};
