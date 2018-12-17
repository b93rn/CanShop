<template>
  <div class="iconContainer" @click="onClick()">
    <h4>{{text}}</h4>
  </div>
</template>

<script>
export default {
  name: "IconCard",
  props: {
    text: String,
    onClick: {
      type: Function,
      default: function() {
        console.info('No function defined in iconCard')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.iconContainer {
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  h4 {
    font-family: 'Roboto-Black';
  }
}
</style>

