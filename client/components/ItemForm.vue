<template>
  <div>
    <v-alert
      v-if="alertMessage"
      :value="alertMessage !== null"
      :type="alertType"
      transition="scale-transition"
      @click="hideAlert"
    >
      {{ alertMessage }}
    </v-alert>
    <v-form
      class="px-5 py-4"
      name="sell"
    >
      <InputTitle
        ref="title"
        v-model="title"
        :external-errors="titleAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputArtist
        ref="artist"
        v-model="artist"
        :external-errors="artistAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputYear
        ref="year"
        v-model="year"
        :external-errors="yearAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputImage
        ref="image"
        v-model="image"
        :external-errors="imageAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <InputPrice
        ref="price"
        v-model.number="price"
        :external-errors="priceAPIErrors"
        @error="inputErrorStateChange"
        @focus="hideAlert"
      />
      <v-btn
        name="submit"
        color="blue-grey darken-4 white--text"
        class="elevation-0 mx-0"
        @click="save"
      >
        Save
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import InputTitle from "@components/InputTitle";
import InputArtist from "@components/InputArtist";
import InputYear from "@components/InputYear";
import InputImage from "@components/InputImage";
import InputPrice from "@components/InputPrice";
const TEMP_ID = "new_item";
export default {
  name: "ItemForm",
  components: {
    InputTitle,
    InputArtist,
    InputYear,
    InputImage,
    InputPrice
  },
  mixins: [validationMixin],
  data: () => ({
    alertType: null,
    alertMessage: null,
    titleAPIErrors: [],
    titleErrorState: false,
    artistAPIErrors: [],
    artistErrorState: false,
    yearAPIErrors: [],
    yearErrorState: false,
    imageAPIErrors: [],
    imageErrorState: false,
    priceAPIErrors: [],
    priceErrorState: false,
    title: null,
    artist: null,
    year: null,
    image: null,
    price: null
  }),
  computed: {
    id () {
      return this.$route.params.id || TEMP_ID;
    }
  },
  methods: {
    inputErrorStateChange (type, state) {
      this[`${type}ErrorState`] = state;
    },
    sendData () {
      //
    },
    successCallback (id) {
      //
    },
    errorCallback () {
      this.showAlert(
        "error",
        "There has been an error with your submission. Please try again."
      );
    },
    async save () {
      this.$refs.title.validate();
      this.$refs.artist.validate();
      this.$refs.year.validate();
      this.$refs.image.validate();
      this.$refs.price.validate();
      this.$nextTick(async () => {
        if (
          !this.titleErrorState &&
          !this.artistErrorState &&
          !this.yearErrorState &&
          !this.imageErrorState &&
          !this.priceErrorState
        ) {
          try {
            const { id } = await this.sendData();
            this.successCallback(id);
          } catch (err) {
            this.errorCallback();
          }
        }
      });
    },
    setData (data) {
      data.year = data.year.toString();
      Object.assign(this, data);
    },
    showAlert (type, message) {
      this.alertType = type;
      this.alertMessage = message;
    },
    hideAlert () {
      this.alertMessage = null;
    }
  }
};
</script>
