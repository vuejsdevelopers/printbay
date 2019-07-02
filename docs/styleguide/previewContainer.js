import ItemModel from "@/store/models/Item";
import UserModel from "@/store/models/User";
import { TEMP_USER_ID, TEMP_ITEM_ID } from "@/constants";
import item from "./item";

export default {
  name: "PreviewContain",
  data: () => ({
    item,
    userId: TEMP_USER_ID,
    itemId: TEMP_ITEM_ID,
    APIErrors: [],
    ItemModel,
    UserModel
  }),
  methods: {
    inputErrorStateChange () {}
  }
};
