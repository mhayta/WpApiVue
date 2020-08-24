<template>
  <v-row>
    <v-col cols="12">ASAYİŞ</v-col>
    <v-col cols="6" md="3" v-for="post in data" :key="post.id">
      <router-link :to="{ name: 'post', params: { slug : post.slug } }">
        <v-img :src="post.featured_img_url"></v-img>
        <p v-html="post.title.rendered"></p>
      </router-link>
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
      console.log(config.url);
      axios
        .get(config.url + "posts?categories=14&per_page=4&" + config.callback)
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