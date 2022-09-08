import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/userView.vue')
  },
  {
    path: '/friendslist',
    name: 'friendslist',
    component: () => import('../views/aboutUsView.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../views/imagesView.vue')
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import('../views/videoView.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/groupMessages',
    name: 'groupMessages',
    component: () => import('../views/audioView.vue')
  },
  {
    path: '/GroupMembers',
    name: 'GroupMembers',
    component: () => import('../views/textView.vue')
  },
  {
    path: '/GroupPosts',
    name: 'GroupPosts',
    component: () => import('../views/contactUsView.vue')
  },
  {
    path: '/Posts',
    name: 'Posts',
    component: () => import('../views/PostsView.vue')
  },
  {
    path: '/Nav',
    name: 'nav',
    component: () => import('../views/navView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
