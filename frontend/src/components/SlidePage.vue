<template>
  <transition name="slide">
    <div class="coverBackground">
      <div class="slideContainer">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: "pageSlider",
  props: {
    cancelMethod: Function
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .slideContainer {
    width: 100vw;
    height: auto;
    position: absolute;
    bottom: 0%;
    background-color: var(--main-bg);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    
  }

  .coverBackground {
    width: 100vw;
    height: 100vh;
    position: absolute;
    // background-blend-mode: darken;
    top:0;
    background-color: rgba(190,190,190,0.7);
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

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

