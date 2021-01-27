import { createStore } from 'vuex';

export default createStore({
  state: {
    elementArray: [],
    arraySize: 20,
    visulaizeSpeed: 800,
    algorithm: 0,
    lock: false,
  },
  getters: {
    getArray(state) {
      return state.elementArray;
    },
    getAlgorithm(state) {
      return state.algorithm;
    },
    getHeightMultiplier(state) {
      return 50 / state.arraySize;
    },
    getItemWidth(state) {
      return 80 / state.arraySize;
    },
    getVisualizeSpeed(state) {
      return state.visulaizeSpeed;
    },
    getLockState(state) {
      return state.lock;
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
    lockCanvas(state) {
      state.lock = true;
    },
    unlockCanvas(state) {
      state.lock = false;
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
