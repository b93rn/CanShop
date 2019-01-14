<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer :routes="routes" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import { footerRoutes } from './router.js'
export default {
  components: {
    Footer
  },
  data () {
    return {
      routes: footerRoutes
    }
  }
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
