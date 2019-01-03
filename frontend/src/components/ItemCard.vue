<template>
  <div v-if="product" class="itemContainer" :style="style">
    <div class="left">
      <h2>{{product.name}}</h2>
      <div class="numbers">
      <h5>{{product.price | currency}}</h5>
        <h5>{{product.amount}}</h5>
      </div>
    </div>
    <div class="right">
      <svg id="barcode"></svg>
    </div>
  </div>
</template>

<script>
export default {
  name:"ItemCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.product)
  },
  computed: {
    // If color is not defined in the DB pick white
    color: function () {
      return this.product.color ? this.product.color : '#FFFFFF'
    },
    style: function () {
        return 'background-color: ' + this.color + ';' + ' box-shadow: 1px 2px 10px 0px ' + this.color + '28;'
    }
  }

}
</script>

<style lang="scss" scoped>
.itemContainer {
  width: 200px;
  height: 150px;
  padding: 16px;
  // margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  display: flex;
  
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    .numbers {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .right {
    flex-grow: 2;
  }
  h5 {
    margin: 5px;
  }
}
</style>

