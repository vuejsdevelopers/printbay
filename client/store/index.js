import VuexORM from "@vuex-orm/core";
import Item from "@/store/models/Item";
import item from "@/store/modules/item";

const database = new VuexORM.Database();
database.register(Item, item);

const VuexORMPlugin = VuexORM.install(database);

export default {
  plugins: [ VuexORMPlugin ]
}
