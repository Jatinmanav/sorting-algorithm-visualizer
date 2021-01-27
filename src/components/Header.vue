<template>
  <div class="header">
    <div class="logo">SortVis</div>
    <div class="sorting-options-container">
      <DropdownList
        class="dropdown-list sorting-option"
        :options="[
          { id: 1, name: 'Quick Sort', value: 0 },
          { id: 2, name: 'Merge Sort', value: 1 },
          { id: 3, name: 'Bubble Sort', value: 2 },
        ]"
        dropdownType="algorithm"
        width="125px"
      />
      <div>
        <button
          class="header-button sorting-option"
          @click="visualizeAlgorithm"
        >
          Visualize
        </button>
        <button class="header-button sorting-option" @click="shuffleArray">
          Shuffle
        </button>
      </div>
      <DropdownList
        class="dropdown-list sorting-option"
        :options="[
          { id: 1, name: '0.5x', value: 800 },
          { id: 2, name: '1x', value: 400 },
          { id: 3, name: '2x', value: 200 },
          { id: 4, name: '4x', value: 100 },
        ]"
        dropdownType="visualizeSpeed"
        width="50px"
      />
    </div>
  </div>
</template>

<script>
import DropdownList from './DropdownList.vue';
import bubbleSort from '../algorithms/bubbleSort';
import quickSort from '../algorithms/quickSort';

export default {
  name: 'Header',
  components: {
    DropdownList,
  },
  methods: {
    shuffleArray() {
      if (this.$store.getters.getLockState === false) {
        this.$store.commit('shuffleArray');
      }
    },
    visualizeAlgorithm() {
      if (this.$store.getters.getLockState === false) {
        let result;
        if (this.$store.getters.getAlgorithm === 0) {
          result = this.quickSort(this.$store.getters.getArray);
        } else {
          result = this.bubbleSort(this.$store.getters.getArray);
        }
        const lockDuration = result.length * this.$store.getters.getVisualizeSpeed;
        this.$store.commit('lockCanvas');
        result.forEach((item) => {
          this.swapValues(item[0], item[1], item[2]);
        });
        setTimeout(() => {
          this.$store.commit('unlockCanvas');
        }, lockDuration);
      }
    },
    swapValues(source, target, count) {
      this.$store.dispatch('swapWithTimeOut', { source, target, count });
    },
    bubbleSort,
    quickSort,
  },
};
</script>

<style scoped lang="scss">
.header {
  background-color: var(--header-color);
  display: flex;
  justify-content: space-between;
  padding: 1em 5%;
  align-items: center;
}

.logo {
  color: var(--logo-color);
  font-size: 1.5em;
  font-family: Monsterrat;
}

.sorting-options-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.sorting-option {
  margin: 0.5em;
}

.header-button {
  outline: none;
  border: none;
  padding: 0.7em;
  font-size: 1em;
  border-radius: 10px;
  background-color: var(--button-color);
  cursor: pointer;
  transition: background-color 250ms;
  &:hover {
    background-color: var(--button-hover-color);
  }
}
</style>
