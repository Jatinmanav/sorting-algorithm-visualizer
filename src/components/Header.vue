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
  props: {
    msg: String,
  },
  components: {
    AlgorithmDropdownList,
    SpeedDropdownList,
  },
};
</script>

<style scoped lang="scss">
.header {
  background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 1em 5%;
  align-items: center;
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
  border: 1px blue solid;
  padding: 1em;
  border-radius: 10px;
  background-color: green;
  cursor: pointer;
  &:hover {
    background-color: greenyellow;
  }
}
</style>
