import axios from "axios";

export default {
  namespaced: true,
  state: {},
  actions: {
    GET_USER_DATA({ commit, rootState }, user_id) {
      commit("loading", { root: true });
      axios({
        url: "",
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
    setUserDashboard(state, payload) {}
  }
};
