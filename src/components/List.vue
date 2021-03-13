<template>
  <div class="bg-gray-800 mx-auto py-5 my-24 max-w-7xl display-container-list">
    <transition-group name="element-array-transition-list">
      <div :key="item" v-for="item in getArray" class="bg-gray-200 font-medium array-item-list">
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'List',
  created() {
    this.$store.commit('shuffleArray');
  },
  computed: {
    getArray() {
      return this.$store.getters.getArray;
    },
  },
};
</script>

<style lang="scss">
.display-container-list {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  border-radius: 15px;
}

.element-array-transition-list-move {
  transition: transform 0.1s ease;
}

.array-item-list {
  height: 30px;
  width: 100px;
  text-align: center;
  background-color: var(--button-color);
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
}
</style>
