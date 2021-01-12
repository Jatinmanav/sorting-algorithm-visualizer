<template>
  <div class="header">
    <DropdownList />
    <button>Visualize</button>
    <button>Shuffle</button>
    <label> Speed </label><input type="range" />
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
  width: 100%;
}
</style>
