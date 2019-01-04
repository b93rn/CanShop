<template>
  <div class="iconContainer" @click="onClick()">
    <h4>{{getUserLetters}}</h4>
  </div>
</template>

<script>
export default {
  name: "IconCard",
  props: {
    firstName: String,
    lastName: String,
    text: String,
    onClick: {
      type: Function,
      default: function() {
        console.info('No function defined in iconCard')
      }
    }
  },
  computed: {
    getUserLetters: function() {
      if(this.firstName && this.lastName) {
        return (this.firstName.charAt(0) + this.lastName.charAt(0)).toUpperCase()
      } else {
        return this.text
      }
    },
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
    //   -webkit-box-shadow: 1px 1px 4px 0px var(--main-black-shadow);
    // -moz-box-shadow: 1px 1px 4px 0px var(--main-black-shadow);
  h4 {
    font-family: 'Roboto-Black';
  }
}
</style>

