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
      weather_service: true,
      todo_service: true,
      shopping_service: true
    },
    loading: false,
    isAuthenticated: false
  },
  mutations: {
    setUserSettings(state, payload) {
      state.userSettings.weather_service =
        payload.user.settings.weather_service;
      state.userSettings.todo_service = payload.user.settings.todo_service;
      state.userSettings.shopping_service =
        payload.user.settings.shopping_service;
    },
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

      state.loading = false;
    },
    logout: state => {
      state.isAuthenticated = false;
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
      console.log("logging in");
      commit("loading");
      commit("login_success");
      this.$store.state.user_id = authData.username;

      this.$router.push("Dashboard");
    }
  },

  getters: {}
});

export default store;
