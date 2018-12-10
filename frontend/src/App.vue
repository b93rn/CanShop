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
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 16px;
  background-color: var(--main-bg);
  color: var(--main-black);
}
</style>
