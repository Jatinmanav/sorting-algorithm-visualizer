<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative h-16">
        <div class="flex items-center justify-between">
          <div class="flex mx-auto sm:mx-0 py-5 justify-around">
            <img
              class="block lg:hidden cursor-pointer sm:cursor-auto h-8 w-auto"
              :src="logo"
              alt="Visualize"
              @click="mobileMenuOpen = !mobileMenuOpen"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              :src="logoText"
              alt="Visualize"
            />
          </div>
          <div class="hidden sm:flex flex-row space-x-4">
            <DropdownList
              class="dropdown-list sorting-option mb-2"
              v-for="config in dropdownConfig"
              :options="config.options"
              :key="config.id"
              :dropdownType="config.type"
              :width="config.width"
            />
          </div>
          <div class="hidden sm:flex space-x-4">
            <div
              @click="visualizeAlgorithm"
              class="m-auto mb-1 cursor-pointer text-lg text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Visualize
            </div>
            <div
              @click="shuffleArray"
              class="m-auto mb-1 cursor-pointer text-lg text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Shuffle
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu">
      <div v-if="mobileMenuOpen" class="px-2 pt-2 pb-3 space-y-1">
        <DropdownList
          class="dropdown-list sorting-option p-1 my-0"
          v-for="config in dropdownConfig"
          :options="config.options"
          :key="config.id"
          :dropdownType="config.type"
          :width="config.width"
        />
        <div class="flex justify-evenly pt-5">
          <div
            @click="visualizeAlgorithm"
            class="m-auto cursor-pointer text-lg text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Visualize
          </div>
          <div
            @click="shuffleArray"
            class="m-auto cursor-pointer text-lg text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Shuffle
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import DropdownList from './DropdownList.vue';
import bubbleSort from '../algorithms/bubbleSort';
import quickSort from '../algorithms/quickSort';

export default {
  name: 'Header',
  components: {
    DropdownList,
  },
  data() {
    return {
      mobileMenuOpen: false,
      dropdownConfig: [
        {
          id: 1,
          options: [
            { id: 1, name: 'Canvas View', value: 'canvas' },
            { id: 2, name: 'List View', value: 'list' },
          ],
          type: 'view',
          width: '150px',
        },
        {
          id: 2,
          options: [
            { id: 1, name: 'Quick Sort', value: 0 },
            { id: 2, name: 'Bubble Sort', value: 1 },
          ],
          type: 'algorithm',
          width: '150px',
        },
        {
          id: 3,
          options: [
            { id: 1, name: '0.5x', value: 800 },
            { id: 2, name: '1x', value: 400 },
            { id: 3, name: '2x', value: 200 },
            { id: 4, name: '4x', value: 100 },
          ],
          type: 'visualizeSpeed',
          width: '100px',
        },
      ],
      logo: require('../assets/Logo.svg'),
      logoText: require('../assets/LogoText.svg'),
    };
  },
  methods: {
    shuffleArray() {
      if (this.$store.getters.getLockState === false) {
        this.$store.commit('shuffleArray');
      }
    },
    visualizeAlgorithm() {
      if (this.$store.getters.getLockState === false) {
        let result;
        if (this.$store.getters.getAlgorithm === 0) {
          result = this.quickSort(this.$store.getters.getArray);
        } else {
          result = this.bubbleSort(this.$store.getters.getArray);
        }
        const lockDuration = result.length * this.$store.getters.getVisualizeSpeed;
        this.$store.commit('lockCanvas');
        result.forEach((item) => {
          this.swapValues(item[0], item[1], item[2]);
        });
        setTimeout(() => {
          this.$store.commit('unlockCanvas');
        }, lockDuration);
      }
    },
    swapValues(source, target, count) {
      this.$store.dispatch('swapWithTimeOut', { source, target, count });
    },
    bubbleSort,
    quickSort,
  },
};
</script>
