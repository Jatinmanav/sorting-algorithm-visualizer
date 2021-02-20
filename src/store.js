import { createStore } from 'vuex';

export default createStore({
  state: {
    elementArray: [],
    arraySize: 20,
    visulaizeSpeed: 800,
    algorithm: 0,
    lock: false,
    view: 'canvas',
  },
  getters: {
    getArray(state) {
      return state.elementArray;
    },
    getAlgorithm(state) {
      return state.algorithm;
    },
    getHeightMultiplier(state) {
      let maxHeight = 0;
      state.elementArray.forEach((item) => {
        if (item > maxHeight) maxHeight = item;
      });
      return 50 / maxHeight;
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
    getView(state) {
      return state.view;
    },
    getAddElement(state) {
      return state.addElement;
    },
  },
  mutations: {
    shuffleArray(state) {
      state.elementArray = [];
      let count = 1;
      while (count <= 20) {
        state.elementArray.push(count);
        count += 1;
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
    setView(state, payload) {
      state.view = payload;
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
    toggleNewElement(state) {
      state.addElement = !state.addElement;
    },
    addElement(state, payload) {
      state.elementArray.push(payload);
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
