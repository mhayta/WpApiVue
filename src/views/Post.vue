<template>
  <v-row>
    <v-col cols="9" class="mt-16">
      <h1 v-html="data.title.rendered" />
      <span>{{ data['post-meta-fields']['wpcf-haber-kaynagi'][0] }} - {{data.date}}</span>
      <img :src="data.featured_img_url" />
      <blockquote class="blockquote" v-html="data.excerpt.rendered"></blockquote>
      <p v-html="data.content.rendered"></p>
      <div>
        <v-chip v-for="tag in tags" :key="tag.id" color="blue-grey" small>{{ tag.name }}</v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
      tags: null,
    };
  },
  methods: {
    getPost: function () {
      axios
        .get(
          "http://d20haber.com/wp-json/wp/v2/posts?slug=" +
            this.$route.params.slug +
            "&_JSONP"
        )
        .then((response) => (this.data = response.data[0]))
        .then((data) => {
          axios
            .get(
              "http://d20haber.com/wp-json/wp/v2/tags?post=" +
                data.id +
                "&_JSONP"
            )
            .then((data) => (this.tags = data.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>