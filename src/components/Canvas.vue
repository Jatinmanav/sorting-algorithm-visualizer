<template>
  <div class="display-container">
    <div
      class="array-item"
      :style="'height:' + item * 100 + 'px;'"
      :key="item"
      v-for="item in array"
    ></div>
  </div>
</template>

<script>
import useArray from '../composables/array';

export default {
  name: 'Canvas',
  setup() {
    const { array, setArray } = useArray();
    console.log(array.value);
    console.log(setArray);

    return { array };
  },
};
</script>

<style lang="scss" scoped>
.display-container {
  margin: auto;
  background-color: green;
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.array-item {
  min-height: 10px;
  min-width: 20px;
  background-color: red;
  border: 1px solid black;
}
</style>
