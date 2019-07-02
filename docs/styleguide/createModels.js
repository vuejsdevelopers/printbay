import Item from "@/store/models/Item";
import User from "@/store/models/User";
import { TEMP_USER_ID, TEMP_ITEM_ID } from "@/constants";
import item from "./item";

export default function () {
  User.create({
    data: {
      id: TEMP_USER_ID
    }
  });
  Item.insert({
    data: [
      {
        id: TEMP_ITEM_ID
      },
      item
    ]
  });
}
