<template>
  <SlidePage>
    <div class="container">
      <h1>Bewerk Product</h1>
      <div class="userForm">
        <input type="text" placeholder="Naam" v-model="product.name" />
        <input type="text" placeholder="Omschrijving" v-model="product.description" />
        <input type="text" placeholder="Kleur bijvoorbeeld: #FFFFFF" v-model="product.color" />
      </div>
      <div class="selector">
        <NumberSelector
          v-if="product.price !== undefined"
          addedTitle="Bedrag"
          @amountChanged="setPrice"
          :start-amount="product.price"
        />
        <NumberSelector
          v-if="product.purchasePrice !== undefined"
          addedTitle="Inkoop"
          @amountChanged="setPurchasePrice"
          :start-amount="product.purchasePrice"
        />
        <NumberSelector
          v-if="product.amount !== undefined"
          addedTitle="Aantal"
          @amountChanged="setAmount"
          :start-amount="product.amount"
          :numbers="[24, 12, 10, 5, 2, 1]"
          :isCurrency="false"
        />
      </div>
      <div class="buttons">
        <Button title="Bewerken" color="blue" @onClick="updateProduct" />
        <Button title="Annuleren" color="yellow" @onClick="resetSelectedProduct" />
        <Button title="Verwijderen" color="red" @onClick="deleteProduct" />
      </div>
    </div>
  </SlidePage>
</template>

<script>
import Button from "./Button.vue";
import NumberSelector from "./NumberSelector.vue";
import SlidePage from "./SlidePage.vue";
import { mapState } from "vuex";

export default {
  name: "editProductPage",
  components: {
    SlidePage,
    Button,
    NumberSelector
  },
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    // copy the object without reference
    this.product = JSON.parse(JSON.stringify(this.selectedProduct));
  },
  methods: {
    setPrice: function(price) {
      this.product.price = price;
    },
    setPurchasePrice: function(price) {
      this.product.purchasePrice = price;
    },
    setAmount: function(amount) {
      this.product.amount = amount;
    },
    updateProduct: function() {
      this.$store
        .dispatch("updateProduct", this.product)
        .then(updatedProduct => {
          this.$store.commit("UPDATE_PRODUCT", updatedProduct);
          this.$store.commit("SET_PRODUCT", null);
        });
    },
    resetSelectedProduct: function() {
      this.$store.commit("SET_PRODUCT", null);
    },
    deleteProduct: function() {
      this.$store.dispatch("deleteProduct", this.product);
    }
  },
  computed: {
    ...mapState(["selectedProduct"])
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-bottom: 16px;
}
h4,
h5 {
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  .userForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .selector {
    width: 100%;
    h2 {
      margin-bottom: 8px;
    }
  }
  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
