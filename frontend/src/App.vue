<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: var(--main-bg);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  background-color: var(--main-bg);
  color: var(--main-black);
  overflow: hidden;
}
</style>
