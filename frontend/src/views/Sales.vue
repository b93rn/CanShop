<template>
  <div class="container" v-if="sales">
    <h2>Verkoop geschiedenis</h2>
    <SaleItem 
      v-for="sale in sales"
      :key="sale._id"
      :sale="sale"
    />
  </div>
</template>

<script>
import SaleItem from '../components/SaleItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'SalesPage',
  components: {
    SaleItem
  }, 
  computed: {
    ...mapState([
      'sales'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .container {
    h2 {
      margin-bottom: 16px;
    }
    width: 100;
    height: 100%;
    margin: 16px; 
    display: flex;
    flex-direction: column;
  }
</style>