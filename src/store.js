import { createStore } from 'vuex';

export default createStore({
  state: {
    elementArray: [],
    arraySize: 20,
    visulaizeSpeed: 500,
    algorithm: 0,
  },
  getters: {
    getArray(state) {
      return state.elementArray;
    },
    getHeightMultiplier(state) {
      return 50 / state.arraySize;
    },
    getItemWidth(state) {
      return 80 / state.arraySize;
    },
  },
  mutations: {
    shuffleArray(state) {
      state.elementArray = [];
      for (let i = 1; i <= state.arraySize; i += 1) {
        state.elementArray.push(i);
      }
      for (let i = state.elementArray.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.elementArray[i], state.elementArray[j]] = [
          state.elementArray[j], state.elementArray[i]];
      }
    },
    swapIndices(state, payload) {
      const tempStore = state.elementArray[payload.source];
      state.elementArray[payload.source] = state.elementArray[payload.target];
      state.elementArray[payload.target] = tempStore;
    },
    setAlgorithm(state, payload) {
      state.algorithm = payload;
    },
    setVisualizeSpeed(state, payload) {
      state.visulaizeSpeed = payload;
    },
  },
  actions: {
    swapWithTimeOut({ commit, state }, payload) {
      setTimeout(() => {
        commit('swapIndices', { source: payload.source, target: payload.target });
      }, state.visulaizeSpeed * payload.count);
    },
  },
});
