import axios from "axios";
import APP_URL from "../index";

export default {
  namespaced: true,
  state: {
    links: []
  },
  actions: {
    GET_USER_DATA({ commit, rootState }) {
      commit("loading", { root: true });
      axios({
        url: `${APP_URL}/user`,
        method: "get"
      })
        .then(response => {
          commit("setUserDashboard", response.data);
          commit("loading", { root: true });
        })
        .catch();
    }
  },
  mutations: {
    setUserDashboard(state, payload) {
      state.links.push(payload.linkList);
    }
  }
};
