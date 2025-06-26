import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Research from '../pages/Research.vue'
import Projects from '../pages/Projects.vue'
import Researchers from '../pages/Researchers.vue'
import News from '../pages/News.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/researchers',
    name: 'Researchers',
    component: Researchers
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
