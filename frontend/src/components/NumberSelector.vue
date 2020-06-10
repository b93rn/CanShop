<template>
  <div class="selectorContainer">
    <div class="left">
      <div class="possitive">
        <h5>+</h5>
        <button
          class="roundButton green"
          v-for="number in numbers"
          :key="number"
          @click="addAmount(number)"
        >
          <h6 v-if="isCurrency">{{number | currency}}</h6>
          <h6 v-else>{{number}}</h6>
        </button>
      </div>
      <div class="negative">
        <h5>-</h5>
        <button
          class="roundButton red"
          v-for="number in numbers"
          :key="number"
          @click="subtractAmount(number)"
        >
          <h6 v-if="isCurrency">{{number | currency}}</h6>
          <h6 v-else>{{number}}</h6>
        </button>
      </div>
    </div>
    <div class="right">
      <div class="results">
        <div>
          <h3>{{addedTitle}}</h3>
          <h4 v-if="isCurrency">{{ amount | currency}}</h4>
          <h4 v-else>{{amount}}</h4>
        </div>
        <div v-if="amount != total">
          <h3>{{totalTitle}}</h3>
          <h4 v-if="isCurrency">{{ total | currency}}</h4>
          <h4 v-else>{{total}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberSelector",
  props: {
    numbers: {
      type: Array,
      default: () => [1.0, 0.5, 0.2, 0.1, 0.05, 0.01]
    },
    addedTitle: {
      type: String,
      default: "Toevoegen"
    },
    totalTitle: {
      type: String,
      default: "Totaal"
    },
    isCurrency: {
      type: Boolean,
      default: true
    },
    startAmount: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      amount: 0,
      total: 0
    };
  },
  methods: {
    addAmount: function(number) {
      this.amount += number;
      this.total += number;
      this.$emit("amountChanged", this.convertToCurrency(this.total));
    },
    subtractAmount: function(number) {
      this.amount -= number;
      this.total -= number;
      this.$emit("amountChanged", this.convertToCurrency(this.total));
    }
  },
  created() {
    this.total = this.startAmount;
  }
};
</script>

<style lang="scss" scoped>
.selectorContainer {
  display: flex;
  height: 190px;
  width: 100;
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
    width: 80%;
    // flex-grow: 2;
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
    width: 20%;
    .results {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
    }
  }
}
.roundButton {
  min-width: 59px;
  min-height: 59px;
  border: none;
  border-radius: 50%;
  margin-left: 20px;
  outline: none;
}
h3,
h4,
h5,
h6 {
  margin: 0;
}
h3 {
  margin-bottom: 6px;
}
</style>

