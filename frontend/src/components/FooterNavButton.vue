<template>
<div>
  <router-link class="routerButton" :to="url" exact>
    <span class="svg" v-html="icon" />
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>
<style scoped lang="scss">
  .routerButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 3px;
    height: 100%;
    color: #005252;

    &:focus, &:active {
      text-decoration: none;
    }

    .svg {
      text-align: center;
      padding: 3px;
    }
  }

  svg {
    width: 48px;
    height: 48px;
  }

  p {
    margin: 0;
  }

  .router-link-active {
    text-decoration: none;
    fill: #00df43 !important;
  }
</style>