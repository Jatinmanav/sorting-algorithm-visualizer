<template>
  <div class="bg-gray-800 items-baseline mx-auto px-5 py-5 my-24 max-w-7xl display-container">
    <transition-group name="element-array-transition">
      <div
        class="bg-gray-200 rounded-xl array-item"
        :style="
          'height:' +
          item * heightMultiplier +
          'vh;' +
          'width:' +
          itemWidth +
          'vw;'
        "
        :key="item"
        v-for="item in getArray"
      ></div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  created() {
    this.$store.commit('shuffleArray');
  },
  computed: {
    heightMultiplier() {
      return this.$store.getters.getHeightMultiplier;
    },
    itemWidth() {
      return this.$store.getters.getItemWidth;
    },
    getArray() {
      return this.$store.getters.getArray;
    },
  },
};
</script>

<style lang="scss" scoped>
.display-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
}

.element-array-transition-move {
  transition: transform 0.5s ease;
}

.array-item {
  min-height: 10px;
  border: 1px solid black;
}
</style>
