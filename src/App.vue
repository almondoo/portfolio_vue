<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content v-bind:class="classAppObject">
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
  data: () => ({

  }),
  computed: {
    classAppObject: () => {
      return {
        background: location.pathname === '/'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.background {
  background-image: url("./assets/background.jpg") !important ;
}
</style>
