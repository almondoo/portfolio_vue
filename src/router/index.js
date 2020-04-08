import Vue from 'vue'
import Router from 'vue-router'
import WellCome from '../pages/WellCome'
import Profile from '../pages/Profile'
import Skill from '../pages/Skill'
import Works from '../pages/Works'
import Contact from '../pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'wellcome',
    component: WellCome
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile
  }, {
    path: '/skill',
    name: 'skill',
    component: Skill
  }, {
    path: '/works',
    name: 'works',
    component: Works
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact
  }]
})
