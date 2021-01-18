<template>
  <div class="dropdown-container">
    <div class="dropdown-display" @click="toggleDropdown">
      <p>{{ selected }}</p>
      <DropdownIcon fillColor="#000000" class="dropdown-icon" />
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
  name: 'AlgorithmDropdownList',
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
  background: var(--button-color);
  position: relative;
  border-radius: 10px;
}

.dropdown-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms;
  &:hover {
    background-color: var(--button-hover-color);
  }
}

.dropdown-items-container {
  position: absolute;
  width: 100%;
}

.dropdown-item {
  background-color: yellow;
  max-width: 100%;
  text-align: center;
  padding: 0.5em;
  border: solid 1px black;
  border-top: none;
  transition: background-color 250ms;
  cursor: pointer;
  &:first-child {
    border: solid 1px black;
  }
  &:hover {
    background-color: var(--button-hover-color);
  }
}
</style>
