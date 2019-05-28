import { validationMixin } from "vuelidate";
import { EVENT_ERROR, EVENT_INPUT } from "@/constants";

export default {
  mixins: [validationMixin],
  props: {
    externalErrors: Array,
    id: String,
    model: Object
  },
  data: () => ({
    errors: []
  }),
  computed: {
    value: {
      get () {
        return this.model.find(this.id)[this.name];
      },
      set (val) {
        this.model.update({
          where: this.id,
          data: { [this.name]: val }
        });
      }
    }
  },
  watch: {
    errors () {
      this.$emit(EVENT_ERROR, this.name, this.errors.length > 0);
    },
    externalErrors () {
      this.$v.value.$touch();
    }
  }
};
