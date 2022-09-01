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
    messages: [],
    groupMessages: [],
    name: "Terra Scientia",
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
