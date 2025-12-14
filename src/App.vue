<template>
  <div id="app">
    <v-app>
      <Header />
      <v-main class="mt-12">
        <router-view />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
