<template>
  <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(slide, i) in data"
      :key="i"
      :src="slide['post-meta-fields']['wpcf-ust-banner-gorsel'][0]"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    getPosts: function () {
      axios
        .get(
          "https://d20haber.com//wp-json/wp/v2/posts?meta_key=wpcf-anasayfa-konumu&meta_value=ust-banner&per_page=5&_JSONP=callback"
        )
        .then((response) => (this.data = response.data))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
</style>