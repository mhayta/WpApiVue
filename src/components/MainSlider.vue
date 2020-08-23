<template>
  <v-row>
    <v-col cols="9">
      <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in data" :key="i">
          <v-img :src="slide['post-meta-fields']['wpcf-alt-banner-gorsel'][0]"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="3"></v-col>
  </v-row>
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
          "https://d20haber.com//wp-json/wp/v2/posts?meta_key=wpcf-anasayfa-konumu&meta_value=alt-banner&per_page=11&_JSONP"
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