<template>
  <div class="display-container">
    <transition-group name="element-array-transition">
      <div
        class="array-item"
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
  margin: auto;
  background-color: green;
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 10vh;
}

.element-array-transition-move {
  transition: transform 0.1s ease;
}

.array-item {
  min-height: 10px;
  background-color: red;
  border: 1px solid black;
}
</style>
