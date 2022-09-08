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
    allImages: [],
    allVideos: [],
    allAudios: [],
    allColours: [],
    messages: [],
    groupMessages: [],
    toggledUser:'',
    name: "Terra Scientia",
    loggedIN:false,
    brokenLink:"https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
