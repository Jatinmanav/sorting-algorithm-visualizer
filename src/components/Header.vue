<template>
  <div class="header">
    <div class="logo">SAVisualizer</div>
    <div class="sorting-options-container">
      <DropdownList class="sorting-option" />
      <button class="header-button sorting-option">Visualize</button>
      <button class="header-button sorting-option">Shuffle</button>
      <label class="sorting-option"> Speed </label>
      <input class="sorting-option" type="range" />
    </div>
  </div>
</template>

<script>
import DropdownList from './DropdownList.vue';

export default {
  name: 'Header',
  props: {
    msg: String,
  },
  components: {
    DropdownList,
  },
};
</script>

<style scoped lang="scss">
.header {
  background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 1em 5%;
}

.sorting-options-container {
  display: flex;
  align-items: center;
}

.sorting-option {
  margin: 0.5em;
}

.header-button {
  outline: none;
  border: 1px blue solid;
  background-color: green;
}
</style>
