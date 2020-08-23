<template>
    <v-layout text-center wrap>
      <v-flex v-for="post in data" v-bind:key="post.id" xs12 md6 ma>
        <router-link :to="{ name: 'post', params: { slug : post.slug } }">
          <v-img :src="post.featured_img_url" class="my-3"></v-img>
          <h2 v-html="post.title.rendered"></h2>
        </router-link>
      </v-flex>
    </v-layout>
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
        .get("https://d20haber.com/wp-json/wp/v2/posts?_JSONP")
        // .get("http://d20haber.comwp-json/wp/v2/posts?slug=post-slug&_JSONP")
        // .get('http://d20haber.com/wp-json/wp/v2/categories/?_JSONP&orderby=id' })
        // .get('https://cors-anywhere.herokuapp.com/'+'http://d20haber.com/wp-json/wp/v2/categories')
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
