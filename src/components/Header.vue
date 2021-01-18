<template>
  <div class="header">
    <div class="logo">SortVis</div>
    <div class="sorting-options-container">
      <AlgorithmDropdownList class="dropdown-list sorting-option" />
      <div>
        <button class="header-button sorting-option">Visualize</button>
        <button class="header-button sorting-option">Shuffle</button>
      </div>
      <SpeedDropdownList class="dropdown-list sorting-option" />
    </div>
  </div>
</template>

<script>
import AlgorithmDropdownList from './AlgorithmDropdownList.vue';
import SpeedDropdownList from './SpeedDropdownList.vue';

export default {
  name: 'Header',
  components: {
    AlgorithmDropdownList,
    SpeedDropdownList,
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
