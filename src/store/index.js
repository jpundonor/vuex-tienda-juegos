import { createStore } from "vuex";
import juegos from "../data/juegos.json";

const store = createStore({
  state() {
    return {
      games: juegos,
    };
  },
  mutations: {
    updateStock(state, payload) {
      const game = state.games.find((game) => game.codigo === payload.codigo);
      if (game.stock > 0 && payload.quantity === "-") {
        game.stock--;
      } else if (payload.quantity === "+") {
        game.stock++;
      } else {
        alert("No hay stock disponible");
      }
    },
  },
  actions: {
    modifyStock(context, payload) {
      context.commit("updateStock", payload);
    },
  },
  getters: {
    games(state) {
      return state.games;
    },
  },
});

export default store;
