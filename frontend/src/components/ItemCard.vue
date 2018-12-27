<template>
  <div class="itemContainer" :style="style">
    <div class="left">
      <h2>{{itemName}}</h2>
      <div class="numbers">
      <h5>{{price | currency}}</h5>
        <h5>{{quantity}}</h5>
      </div>
    </div>
    <div class="right">
      <svg id="barcode"></svg>
    </div>
  </div>
</template>

<script src="JsBarcode.all.min.js">
JsBarcode("#barcode", "1234", {
  format: "pharmacode",
  lineColor: "#0aa",
  width: 4,
  height: 40,
  displayValue: false
});
</script>
<script>


export default {
  name:"ItemCard",
  props: {
    itemName: String,
    price: Number,
    quantity: Number,
    color: {
      type: String,
      default: '#FFFFFF'
    }
  },
  components: {
  },
  computed: {
    style () {
      return 'background-color: ' + this.color + ';' + ' box-shadow: 1px 2px 10px 0px ' + this.color + '28;';

    }
  }

}
</script>

<style lang="scss" scoped>
.itemContainer {
  width: 335px;
  height: 150px;
  padding: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  display: flex;
  
  .left {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .numbers {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .right {
    width: 75%;
  }
  h5 {
    margin: 5px;
  }
}
</style>

