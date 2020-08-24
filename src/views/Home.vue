<template>
  <v-main>
    <TopSlider />
    <MainSlider />
    <PostsBlock />
  </v-main>
</template>

<script>
import TopSlider from "../components/TopSlider";
import MainSlider from "../components/MainSlider";
import PostsBlock from "../components/PostsBlock";

export default {

  components: {
    TopSlider,
    MainSlider,
    PostsBlock
  },

  data: () => ({})
};
</script>