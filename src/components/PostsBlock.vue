<template>
<v-row>
    <v-col cols="12">ASAYİŞ</v-col>
    <v-col cols="3" v-for="post in data" :key="post.id">
        <v-img :src="post.featured_img_url"></v-img>
        <p v-html="post.title.rendered"></p>
    </v-col>
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
          "https://d20haber.com//wp-json/wp/v2/posts?categories=14&per_page=4&_JSONP"
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