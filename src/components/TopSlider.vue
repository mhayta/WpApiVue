<template>
  <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(slide, i) in data"
      :key="i"
      :src="slide['post-meta-fields']['wpcf-ust-banner-gorsel'][0]"
      :to="{ name: 'post', params: { slug : slide.slug } }"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";
import { config } from "../config";

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
          config.url +"posts?meta_key=wpcf-anasayfa-konumu&meta_value=ust-banner&per_page=5&"+ config.callback
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