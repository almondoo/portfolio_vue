import Vue from 'vue'
import Router from 'vue-router'
import WelCome from '../pages/WelCome'
// import Profile from '../pages/Profile'
import Skill from '../pages/Skill'
import Works from '../pages/Works'
// import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'welcome',
    component: WelCome
    // }, {
    //   path: '/profile',
    //   name: 'profile',
    //   component: Profile
  }, {
    path: '/skill',
    name: 'skill',
    component: Skill
  }, {
    path: '/works',
    name: 'works',
    component: Works
    // }, {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact
  }, {
    path: '*',
    name: 'notFound',
    component: NotFound
  }],

  base: process.env.ROOT_BASE,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
