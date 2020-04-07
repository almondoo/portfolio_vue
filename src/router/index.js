import Vue from 'vue'
import Router from 'vue-router'
import WellCome from '../pages/WellCome'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'WellCome',
    component: WellCome
  }, {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})
