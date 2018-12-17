<template>
    <button @click="$emit('onClick')" class="regularButton" v-bind:class="colorClass">{{title}}</button>
</template>

<script>
export default {
  name: 'Button',
    props: {
      title: String,
      color: String
    },
    computed: {
      colorClass: function () {
        let result;
        switch (this.color) {
          case "green":
            result = 'green'
            break
          case "yellow":
            result = 'yellow'
            break
          case "red":
            result = 'red'
            break
          default:
            result = 'blue'
        }
        return result
      }
    }
  }
</script>

<style lang="scss" scoped>
.regularButton {
  width: 160px;
  height: 50px;
  border: none;
  border-radius: 16px;

  font-family: 'Roboto-Bold';
  font-size: 20px;
}
</style>

