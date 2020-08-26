<template>
  <v-row>
    <v-col cols="12">
      <div class="redline">
        <h3 v-text="cat.name"></h3>
      </div>
    </v-col>
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
      cat: null,
    };
  },
  props: ["blockId"],
  methods: {
    getPosts: function () {
      axios
        .get(
          config.url +
            "posts?categories=" +
            this.blockId +
            "&per_page=4&" +
            config.callback
        )
        .then((response) => (this.data = response.data))
        .then(() => {
          axios
            .get(
              config.url + "categories/" + this.blockId + "?" + config.callback
            )
            .then((res) => (this.cat = res.data));
        })
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