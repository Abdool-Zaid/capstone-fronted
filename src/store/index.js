import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";


export default createStore({
  state: {
    user:null,
    id: [],
    username: [],
    intro: [],
    profile: [],
    users: [],
    posts: [],
    allPosts: [],
    messages: [],
    groupMessages: [],
    name: "Terra Scientia",
    loggedIN:false
  },
  getters: {},
  mutations: {},
  actions: {
    verify: () => {
      console.log("verify");
    },
    login: () => {
      console.log("login");
    },
  },
  modules: {},
  plugins: [createPersistedState()],

});
