import { validationMixin } from "vuelidate";
import { EVENT_ERROR, EVENT_INPUT } from "@/constants";

export default {
  mixins: [validationMixin],
  props: {
    /**
     * A reactive array of error message strings that gets merged with local error messages.
     */
    externalErrors: {
      type: Array,
      default: []
    },
    /**
     * The Vuex ORM model that the input will bind to.
     */
    model: {
      type: Function,
      require: true
    },
    /**
     * The id of the model instance.
     */
    id: {
      type: String,
      required: true
    }
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
      /**
       * Error event.
       *
       * @event error
       * @property {string} name Input name
       * @property {boolean} inError Indicates if the input is in error
       */
      this.$emit(EVENT_ERROR, this.name, this.errors.length > 0);
    },
    externalErrors () {
      this.$v.value.$touch();
    }
  }
};
