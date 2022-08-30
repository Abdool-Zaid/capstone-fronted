import { createStore } from 'vuex'

export default createStore({
  state: {
    user:[],
    users:[],
    posts:[],
    messages:[],
    groupMessages:[],
    name:'Terra Scientia'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    verify:()=>{
      console.log('verify')
    },
    login: ()=>{
     console.log('login')
    }
  },
  modules: {
  }
})
