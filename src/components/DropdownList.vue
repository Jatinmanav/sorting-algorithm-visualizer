<template>
  <div class="dropdown-container">
    <div
      class="dropdown-display"
      @click="toggleDropdown"
      :style="dropdownWidth"
    >
      <p>{{ selectedValue }}</p>
      <DropdownIcon fillColor="#000000" class="dropdown-icon" />
    </div>
    <div class="dropdown-items-container" v-if="open">
      <div
        class="dropdown-item"
        v-bind:key="algorithm.id"
        v-for="algorithm in algorithms"
        @click="selectDropdownItem(algorithm)"
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
  props: { options: { type: Array, required: true }, width: { type: String, required: true } },
  data() {
    return {
      open: false,
      algorithms: this.options,
      selected: 0,
    };
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectDropdownItem(algorithm) {
      this.selected = algorithm.id - 1;
    },
  },
  computed: {
    selectedValue() {
      return this.options[this.selected].name;
    },
    dropdownWidth() {
      return `min-width: ${this.width};`;
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
  margin-top: 0.5em;
}

.dropdown-item {
  background-color: var(--button-color);
  max-width: 100%;
  text-align: center;
  padding: 0.5em;
  border: solid 1px black;
  border-top: none;
  transition: background-color 250ms;
  cursor: pointer;
  &:first-child {
    border: solid 1px black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover {
    background-color: var(--button-hover-color);
  }
}
</style>