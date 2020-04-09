<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content class="mt-12">
        <router-view />
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
