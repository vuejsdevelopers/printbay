import User from "@/store/models/User";
import { TEMP_USER_ID } from "@/constants";

export default function () {
  User.create({
    data: {
      id: TEMP_USER_ID
    }
  });
}
