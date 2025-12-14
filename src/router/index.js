import { createRouter, createWebHistory } from 'vue-router'
import WelCome from '../pages/WelCome.vue'
import Profile from '../pages/Profile.vue'
import Skill from '../pages/Skill.vue'
import Works from '../pages/Works.vue'
import Contact from '../pages/Contact.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelCome
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/skill',
    name: 'skill',
    component: Skill
  },
  {
    path: '/works',
    name: 'works',
    component: Works
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
