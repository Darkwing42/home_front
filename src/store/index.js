import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    user: {
      user_id: '',
      access_token: '',
      refresh_token: '',
    },
    loggedIn: false,
    loading: true,
    isAuthenticated: false,
  },
  mutations: {
    setAuth: (state, payload) => {
      state.user_id = payload.user_id;
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
    },
    loading: (state) => {
      state.loading = !state.loading;
    },
    login_success: (state) => {
      state.isAuthenticated = true;
      state.loggedIn = true;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loggedIn = false;
    },
  },
  actions: {
    REGISTER({ commit }, authData) {
      axios({
        method: 'post',
        url: 'http://172.19.0.2:5000/api/v1/register',
        data: {
          username: authData.username,
          password: authData.password,
        },
        
      })
      .then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    LOGIN({ commit }, authData) {
      axios({
        method: 'post',
        url: 'http://172.19.0.2:5000/api/v1/login',
        data: {
          username: authData.username,
          password: authData.password,
        }
      })
      .then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    }

    
    



},
  
  getters: {}
});

export default store;
