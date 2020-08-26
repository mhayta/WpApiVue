<template>
  <v-app class="app">
    <v-navigation-drawer v-model="drawer" absolute temporary class="hidden-md-and-up">
      <!-- -->
    </v-navigation-drawer>
    <v-app-bar app color="white" absolute dark class="hidden-md-and-up">
      <div class="d-flex align-center">
        <v-btn color="white" dark @click.stop="drawer = !drawer">
          <v-icon color="primary">mdi-menu</v-icon>
        </v-btn>
      </div>
      <router-link :to="{ name: 'home' }">
        <v-img
          src="https://d20haber.com/wp-content/themes/d20haberv2/images/logo.png"
          max-height="60px"
          max-width="220px"
          class="mx-auto"
        ></v-img>
      </router-link>
    </v-app-bar>
    <div class="hidden-sm-and-down">
      <v-row>
        <v-col></v-col>
        <v-col>
          <router-link :to="{ name: 'home' }">
            <v-img
              src="https://d20haber.com/wp-content/themes/d20haberv2/images/logo.png"
              max-height="120px"
              max-width="440px"
            ></v-img>
          </router-link>
        </v-col>
        <v-col></v-col>
      </v-row>
    </div>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",

  components: {
    Footer,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
.app {
  max-width: 980px;
  margin: 0 auto;
}
.v-application a {
  text-decoration: none;
}
</style>