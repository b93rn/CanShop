<template>
  <transition name="slide">
    <div id="footer-nav" v-if="!hideFooter">
      <div id="links">
        <FooterNavButton v-if="routes.length"
          v-for="route in routes"
          :key="route.path"
          :title="route.name"
          :icon="route.icon"
          :url="route.path"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import FooterNavButton from './FooterNavButton.vue'

export default {
  name: 'Footer',
  props: ['routes'],
  components: {
    FooterNavButton
  },
  computed: {
    hideFooter: function() {
      return this.$store.getters.slidePageIsActive
    }
  }
}
</script>

<style scoped lang="scss">
  #footer-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 45px;
    width: 100%;

    display: flex;
    justify-content: center;
    background: var(--main-bg);
    border-top: 1px solid #005252;

    #links {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
    }
  }
  .slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.3s ease-in;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}
</style>
