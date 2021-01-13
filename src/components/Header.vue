<template>
  <div class="header">
    <div class="logo">SAVisualizer</div>
    <div class="sorting-options">
      <DropdownList />
      <button class="header-button">Visualize</button>
      <button class="header-button">Shuffle</button>
      <label> Speed </label>
      <input type="range" />
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

.sorting-options {
  display: flex;
}

.header-button {
  outline: none;
  border: 1px blue solid;
  background-color: green;
}
</style>
