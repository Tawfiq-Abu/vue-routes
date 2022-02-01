import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/jobs.vue'
import JobDetails from '../views/jobs/jobDetails.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/jobs',
    name:'Jobs',
    component: Jobs
  },
  {
    path:'/jobs/:id',
    name:'JobDetails',
    component: JobDetails,
    props:true, 
  },
  // redirect
  {
    // say you had a former path and you changed it,you can redirect  when entered
    path:'/all-jobs',
    redirect:'/jobs' 
  },
  // catchAll 404s
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound,

  }
]

const router = createRouter({
  // this createWebHistory function says that we should use the web history api in the browser
  // so we can click folder back in our broowser to go to previous routes
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
