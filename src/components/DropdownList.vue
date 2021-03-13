<template>
  <div :style="'min-width: ' + width" class="align-middle" @click="toggleDropdown">
    <div class="mt-1 relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <span class="flex items-center">
          <span class="ml-3 block truncate"> {{ selectedValue }} </span>
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div v-if="open" class="absolute mt-1 w-full rounded-md bg-white shadow-lg">
        <ul
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          @click="toggleDropdown"
        >
          <li
            id="listbox-item-0"
            role="option"
            class="text-gray-900 z-50 bg-white cursor-default select-none relative py-2 pl-3 pr-9"
            v-for="option in options"
            :key="option.id"
            @click="selectDropdownItem(option)"
          >
            <div class="flex items-center">
              <span class="ml-3 block font-normal truncate"> {{ option.name }} </span>
            </div>
            <span v-if="selected + 1 === option.id" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownList',
  props: {
    options: { type: Array, required: true },
    width: { type: String, required: true },
    dropdownType: { type: String, required: true },
  },
  data() {
    return {
      open: false,
      dropdownOptions: this.options,
      selected: 0,
    };
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectDropdownItem(option) {
      this.selected = option.id - 1;
      this.open = false;
      if (this.dropdownType === 'algorithm') {
        this.$store.commit('setAlgorithm', option.value);
      } else if (this.dropdownType === 'visualizeSpeed') {
        this.$store.commit('setVisualizeSpeed', option.value);
      } else if (this.dropdownType === 'view') {
        this.$store.commit('setView', option.value);
      }
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
};
</script>
