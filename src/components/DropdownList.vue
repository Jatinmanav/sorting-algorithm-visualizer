<template>
  <div class="dropdown-container">
    <div class="dropdown-display" @click="toggleDropdown">
      <p>{{ selected }}</p>
      <DropdownIcon fillColor="#000000" />
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
import DropdownIcon from '../assets/DropdownIcon.vue';

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
  components: {
    DropdownIcon,
  },
};
</script>

<style lang="scss" scoped>
.dropdown-container {
  background: chartreuse;
}

.dropdown-display {
  display: flex;
  align-items: center;
}

.dropdown-items-container {
  position: absolute;
}
</style>
