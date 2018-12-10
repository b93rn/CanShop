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
    colorClass: function() {
      let result;
      switch(this.color) {
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

.green {
  background-color: var(--finance-green);
  -webkit-box-shadow: 1px 6px 10px 0px var(--finance-green-shadow);
-moz-box-shadow: 1px 2px 6px 0px var(--finance-green-shadow);
box-shadow: 1px 2px 6px 0px var(--finance-green-shadow);
}

.yellow {
  background-color: var(--finance-yellow);
  -webkit-box-shadow: 1px 2px 6px 0px var(--finance-yellow-shadow);
-moz-box-shadow: 1px 2px 6px 0px var(--finance-yellow-shadow);
box-shadow: 1px 2px 6px 0px var(--finance-yellow-shadow);
}

.blue {
  background-color: var(--finance-blue);
  -webkit-box-shadow: 1px 2px 6px 0px var(--finance-blue-shadow);
-moz-box-shadow: 1px 2px 6px 0px var(--finance-blue-shadow);
box-shadow: 1px 2px 6px 0px var(--finance-blue-shadow);
}

.red {
  background-color: var(--finance-red);
  -webkit-box-shadow: 1px 2px 10px 0px var(--finance-red-shadow);
-moz-box-shadow: 1px 2px 10px 0px var(--finance-red-shadow);
box-shadow: 1px 2px 10px 0px var(--finance-red-shadow);
}
</style>

