<template>
  <div id="app">
    <keep-alive>
      <transition name="slide">
      <router-view />
      </transition>
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
  overflow: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  background-color: var(--main-bg);
  color: var(--main-black);
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.1s ease-in;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
