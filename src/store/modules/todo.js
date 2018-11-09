import APP_URL from "../index";

export default {
  state: {
    todos: []
  },
  actions: {
    GET_ALL_TODOS({ commit }) {
      commit("loading", { root: true });
    }
  },
  mutations: {
    setTodos(state, payload) {
      state.todos.push(payload.todolists);
    }
  }
};
