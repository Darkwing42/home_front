import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import dashboard from "./modules/dashboard";
import todo from "./modules/todo";

Vue.use(Vuex);

const URL = "172.19.0.:5000";

const store = new Vuex.Store({
  modules: {
    dashboard: dashboard,
    todo: todo
  },
  state: {
    user: {
      user_id: "",
      access_token: "",
      refresh_token: ""
    },
    userSettings: {
      weather_service: "",
      todo_service: "",
      shopping_service: ""
    },
    loggedIn: false,
    loading: true,
    isAuthenticated: false
  },
  mutations: {
    setAuth: (state, payload) => {
      state.user_id = payload.user_id;
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
    },
    loading: state => {
      state.loading = !state.loading;
    },
    login_success: state => {
      state.isAuthenticated = true;
      state.loggedIn = true;
      state.loading = false;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.loggedIn = false;
    }
  },
  actions: {
    REGISTER({ commit }, authData) {
      axios({
        method: "post",
        url: "http://172.19.0.2:5000/api/v1/register",
        data: {
          username: authData.username,
          password: authData.password
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    LOGIN({ commit }, authData) {
      axios({
        method: "post",
        url: "http://172.19.0.2:5000/api/v1/login",
        data: {
          username: authData.username,
          password: authData.password
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  getters: {}
});

export default store;
