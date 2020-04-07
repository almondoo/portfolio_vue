// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// const vuetify = new Vuetify()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  components: {
    App
  },
  template: '<App/>'
})
