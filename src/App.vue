<template>
  <Header />
  <Canvas />
</template>

<script>
import Header from './components/Header.vue';
import Canvas from './components/Canvas.vue';

export default {
  name: 'App',
  components: {
    Header,
    Canvas,
  },
};
</script>

<style lang="scss">
html[data-theme="light"] {
  --header-color: #6c7479;
  --button-color: #b9d9de;
  --button-hover-color: #82bbc4;
  --logo-color: #ffffff;
  --background-color: #ecf5f6;
  font-family: Monsterrat, Arial, Helvetica, sans-serif;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

img {
  max-width: 100%;
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
