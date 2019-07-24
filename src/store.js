import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('token')||'',//令牌头，body,hash
  },
  mutations: {
    setToken(state,token){
      state.token = token;
    }
  },
  actions: {

  }
})
