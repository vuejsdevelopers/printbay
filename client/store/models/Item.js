import { Model } from "@vuex-orm/core";

export default class Item extends Model {
  static entity = "items";

  static fields () {
    return {
      id: this.string(""),
      title: this.string(""),
      artist: this.string(""),
      image: this.string(""),
      year: this.number(0),
      price: this.number(0),
      cart: this.number(0)
    };
  }

  static methodConf = {
    methods: {
      $update: {
        http: {
          method: "patch"
        }
      }
    }
  };
}
