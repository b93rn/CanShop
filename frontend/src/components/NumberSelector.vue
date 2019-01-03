<template>
<div class="container">
  <div class="left">
    <div class="possitive">
      <h5>+</h5>
      <button class="roundButton green" v-for="number in numbers" :key="number" @click="addAmount(number)">
        <h6 v-if="isCurrency">{{number | currency}}</h6>
        <h6 v-else>{{number}}</h6>
      </button>

    </div>
    <div class="negative">
      <h5>-</h5>
      <button class="roundButton red" v-for="number in numbers" :key="number" @click="subtractAmount(number)">
        <h6 v-if="isCurrency">{{number | currency}}</h6>
        <h6 v-else>{{number}}</h6>
      </button>
    </div>
  </div>
  <div class="right">
    <h3>{{title}}</h3>
    <h4 v-if="isCurrency">{{ amount | currency}}</h4>
    <h4 v-else>{{amount}}</h4>
  </div>
</div>
</template>

<script>
export default {
  name: 'NumberSelector',
  props: {
    numbers: {
      type: Array,
      default: () => [1.00, 0.50, 0.20, 0.10, 0.05, 0.01]
    },
    title: {
      type: String,
      default: 'Bedrag'
    },
    isCurrency: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      amount: 0.00
    }
  },
  methods: {
    addAmount: function(number) {
      this.amount += number
      this.$emit('amountChanged', this.amount);
    },
    subtractAmount: function(number) {
      this.amount -= number
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: 190px;
    width: 90vw;
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 8px;
    background-color: white;
    -webkit-box-shadow: 1px 2px 10px 0px var(--main-black-shadow);
    -moz-box-shadow: 1px 2px 10px 0px var(--main-black-shadow);

    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-grow: 2;
      .possitive {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        align-items: baseline;
      }
      .negative {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-evenly;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
  }
  .roundButton {
    min-width: 59px;
    min-height: 59px;
    border: none;
    border-radius: 50%;
    margin-left: 20px;
    outline:none;
  }
  h3,h4, h5, h6 {
      margin: 0;
    }
    h3 {
      margin-bottom: 6px;
    }
</style>

