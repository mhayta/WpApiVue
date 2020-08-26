<template>
  <v-main>
    <TopSlider />
    <MainSlider />
    <PostsBlock v-for="blockId in blockIds" :key="blockId" :blockId="blockId" />
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

  data: () => ({
    blockIds : [14,15,22],
  })
};
</script>

<style>
.redline {
  padding-right: 5px;
  border-left: 5px solid #ee6e73;
  padding-left: 5px;
}
</style>