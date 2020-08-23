<template>
  <v-main>
    <TopSlider />
    <MainSlider />
    <PostsBlock />
    <Posts />
  </v-main>
</template>

<script>
import Posts from "../components/Posts";
import TopSlider from "../components/TopSlider";
import MainSlider from "../components/MainSlider";
import PostsBlock from "../components/PostsBlock";

export default {

  components: {
    Posts,
    TopSlider,
    MainSlider,
    PostsBlock
  },

  data: () => ({})
};
</script>