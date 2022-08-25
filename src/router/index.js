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
    component: () => import('../views/AboutView.vue')
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
    component: () => import('../views/friendsListView.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../views/MessagesView.vue')
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import('../views/GroupsView.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/groupMessages',
    name: 'groupMessages',
    component: () => import('../views/GroupMessagesView.vue')
  },
  {
    path: '/GroupMembers',
    name: 'GroupMembers',
    component: () => import('../views/GroupView.vue')
  },
  {
    path: '/GroupPosts',
    name: 'GroupPosts',
    component: () => import('../views/GroupPostsView.vue')
  },
  {
    path: '/Posts',
    name: 'Posts',
    component: () => import('../views/PostsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
