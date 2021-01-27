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
  background-color: var(--header-color);
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 10vh;
  padding-top: 10vh;
  width: 90%;
  border-radius: 15px;
}

.element-array-transition-move {
  transition: transform 0.1s ease;
}

.array-item {
  min-height: 10px;
  background-color: var(--button-color);
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
