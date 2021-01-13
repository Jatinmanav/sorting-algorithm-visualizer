<template>
  <div class="dropdown-container">
    <div class="dropdown-display" @click="toggleDropdown">
      {{ selected }}
    </div>
    <div class="dropdown-items-container" v-if="open">
      <div
        class="dropdown-item"
        v-bind:key="algorithm.id"
        v-for="algorithm in algorithms"
      >
        {{ algorithm.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownList',
  data() {
    return {
      open: false,
      selected: 'Bubble Sort',
      algorithms: [
        { id: 1, name: 'Bubble Sort' },
        { id: 2, name: 'Quick Sort' },
        { id: 3, name: 'Merge Sort' },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      console.log('Clicked');
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-container {
  background: chartreuse;
}

.dropdown-items-container {
  position: absolute;
}
</style>
