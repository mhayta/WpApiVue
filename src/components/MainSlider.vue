<template>
  <v-row>
    <v-col cols="12" md="9">
      <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(slide, i) in data"
          :key="i"
          :src="slide['post-meta-fields']['wpcf-alt-banner-gorsel'][0]"
          :to="{ name: 'post', params: { slug : slide.slug } }"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="6" md="12">
          <v-img src="https://picsum.photos/300/250?random=1"></v-img>
        </v-col>
        <v-col cols="6" md="12">
          <v-img src="https://picsum.photos/300/250?random=2"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
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
          config.url +"posts?meta_key=wpcf-anasayfa-konumu&meta_value=alt-banner&per_page=11&"+ config.callback
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