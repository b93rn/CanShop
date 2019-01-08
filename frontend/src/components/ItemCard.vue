<template>
  <div v-if="product" class="itemContainer" :style="style" @click="$emit('itemCardClick', product)">
    <div class="left">
      <h2>{{product.name}}</h2>
      <div class="numbers">
      <h5>{{product.price | currency}}</h5>
        <h5>{{product.amount}}</h5>
      </div>
    </div>
    <!-- <div class="right">
      <svg id="barcode"></svg>
    </div> -->
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
  min-width: 140px;
  height: 130px;
  padding: 16px;
  // margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  
  
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // flex-grow: 1;
    .numbers {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .right {
    // flex-grow: 2;
  }
  h5 {
    margin: 5px;
  }
}
</style>

