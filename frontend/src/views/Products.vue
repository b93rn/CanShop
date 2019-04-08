<template>
  <div class="products">
    <h2>Producten</h2>
    <div class="itemList">
      <ItemCard 
        :v-if="products"
          v-for="item in products"
          :key="item.id"
          :product="item"
          @itemCardClick="setSelectedProductInStore"
      />
      <div class="addItem">
        <icon-card text="+" :onClick="addProduct" />
      </div>
    </div>
    <editProduct v-if="selectedProduct" />
    <CreateProduct />
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue'
import EditProduct from '../components/EditProduct.vue'
import CreateProduct from '../components/CreateProduct.vue'
import IconCard from '../components/IconCard.vue'
import { mapState } from 'vuex'

export default {
  name: "product-page",
  components: {
    ItemCard,
    EditProduct,
    CreateProduct,
    IconCard
  },
  methods: {
    addProduct: function() {
      this.$store.commit('TOGGLE_CREATING_PRODUCT')
    },
    setSelectedProductInStore: function(product) {
      this.$store.commit('SET_PRODUCT', product)
    }
  },
  computed: {
    ...mapState([
      'products',
      'selectedProduct'
    ])
  }

}
</script>

<style lang="scss" scoped>
.products {
  margin: 16px; 
   h2 {
     margin-bottom: 16px;
   }
}

.itemList{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
  //  align-content: stretch;
   flex-wrap: wrap;
 }
  .addItem {
  width: 140px;
  height: 130px;
  // margin-right: 16px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
 }
</style>

