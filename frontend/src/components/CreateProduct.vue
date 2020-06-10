<template>
  <SlidePage v-if="creatingProduct">
    <div class="createProduct">
      <h1>Nieuw Product</h1>
      <div class="userForm">
        <input type="text" placeholder="Naam" v-model="product.name" />
        <input type="text" placeholder="Omschrijving" v-model="product.description" />
        <input type="text" placeholder="Kleur bijvoorbeeld: #FFFFFF" v-model="product.color" />
      </div>
      <div class="quantitySelectors">
        <NumberSelector addedTitle="Bedrag" @amountChanged="setPrice" />
        <NumberSelector addedTitle="Inkoop" @amountChanged="setPurchasePrice" />
        <NumberSelector
          addedTitle="Aantal"
          @amountChanged="setAmount"
          :numbers="[24, 12, 10, 5, 2, 1]"
          :isCurrency="false"
        />
      </div>
      <div class="buttons">
        <Button title="Annuleren" color="yellow" @onClick="cancelCreatingProduct"></Button>
        <Button title="Toevoegen" color="green" @onClick="submitProduct"></Button>
      </div>
    </div>
  </SlidePage>
</template>

<script>
import SlidePage from "./SlidePage.vue";
import Button from "./Button.vue";
import NumberSelector from "./NumberSelector.vue";
import { mapState } from "vuex";
export default {
  name: "CreateProduct",
  components: {
    SlidePage,
    Button,
    NumberSelector
  },
  data() {
    return {
      product: {
        name: "",
        description: "",
        color: "",
        barcode: "",
        price: 0.0,
        purchasePrice: 0.0,
        amount: 0
      }
    };
  },
  methods: {
    cancelCreatingProduct: function() {
      this.product.name = "";
      this.product.description = "";
      this.product.color = "";
      this.product.barcode = "";
      this.product.price = 0.0;
      this.product.purchasePrice = 0.0;
      this.product.amount = 0;
      this.$store.commit("TOGGLE_CREATING_PRODUCT");
    },
    submitProduct: function() {
      if (
        this.product.name &&
        this.product.price &&
        this.product.purchasePrice
      ) {
        this.$store.dispatch("addProduct", this.product);
      } else {
        console.error("Some params that are required are not filled in");
      }
    },
    setPrice: function(price) {
      this.product.price = price;
    },
    setPurchasePrice: function(price) {
      this.product.purchasePrice = price;
    },
    setAmount: function(amount) {
      this.product.amount = amount;
    }
  },
  computed: {
    ...mapState(["creatingProduct"])
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-bottom: 16px;
}
.createProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
.userForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quantitySelectors {
  width: 100%;
}
.buttons {
  display: flex;
  width: 336px;
  justify-content: space-between;
}
</style>

