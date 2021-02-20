<template>
  <div class="display-container-list">
    <transition-group name="element-array-transition-list">
      <div :key="item" v-for="item in getArray" class="array-item-list">
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
  margin: auto;
  background-color: var(--header-color);
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 2vh;
  width: 90%;
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
