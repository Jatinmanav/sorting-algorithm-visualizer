<template>
  <div class="header">
    <div class="logo">SortVis</div>
    <div class="sorting-options-container">
      <DropdownList
        class="dropdown-list sorting-option"
        :options="[
          { id: 1, name: 'Quick Sort' },
          { id: 2, name: 'Merge Sort' },
          { id: 3, name: 'Bubble Sort' },
        ]"
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
          { id: 1, name: '0.5x' },
          { id: 2, name: '1x' },
          { id: 3, name: '2x' },
          { id: 4, name: '4x' },
        ]"
        width="50px"
      />
    </div>
  </div>
</template>

<script>
import DropdownList from './DropdownList.vue';

export default {
  name: 'Header',
  components: {
    DropdownList,
  },
  methods: {
    shuffleArray() {
      this.$store.commit('shuffleArray');
    },
    visualizeAlgorithm() {
      this.$store.commit('swapIndices', { source: 0, target: 5 });
    },
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
