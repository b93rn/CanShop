<template>
  <SlidePage>
    <div class="container">
      <h1>Kies Product</h1>
      <div class="UserScanning">
        <div class="user">
          <icon-card :first-name="selectedUser.firstName" :last-name="selectedUser.lastName"/>
          <div class="userRight">
            <h5>{{selectedUser.firstName}}</h5>
            <h4>{{selectedUser.credit | currency}}</h4>
          </div>
        </div>
        <div class="scanning">
          <h6>scanning...</h6>
        </div>
      </div>
      <div class="produtctContainer">
        <h2>Handmatig kiezen</h2>
       <div class="products">
        <ItemCard class="ItemCard"
          v-for="product in products"
          :key="product._id"
          :product="product"
          @itemCardClick="buyProduct"
         />
      </div>
      </div>
      <div class="selector">
        <h2>Tegoed opwaarderen</h2>
        <number-selector :start-amount="convertToCurrency(selectedUser.credit)" @amountChanged="updateCredit"/>
      </div>
      <div class="buttons">
        <Button title="Bewerken" color="blue" @onClick="updateUser" />
        <Button title="Annuleren" color="yellow" @onClick="resetSelectedUser" />
        <Button title="Verwijderen" color="red" @onClick="deleteUser" />
      </div>
    </div>
  </SlidePage>
</template>

<script>
import Button from './Button.vue'
import IconCard from './IconCard.vue'
import NumberSelector from './NumberSelector.vue'
import SlidePage from './SlidePage.vue'
import ItemCard from './ItemCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'EditSelectedUserWindow',
  components: {
    Button,
    IconCard,
    NumberSelector,
    SlidePage,
    ItemCard
  },
  data() {
    return {
      newCredit: 0,
    }
  },
  methods: {
    resetSelectedUser: function() {
      this.$store.commit('SET_USER', null)
    },
    test: function() {
      console.log('test...')
    },
    updateCredit: function(amount) {
      this.newCredit = amount
    },
    buyProduct: function(product) {
      let editedUser = {}
      let editedProduct = {}
      // create new variables since we do not want to mutate the current state.
      editedUser._id = this.selectedUser._id
      editedProduct._id = product._id
      editedUser.canCount = this.selectedUser.canCount + 1
      editedUser.credit = this.convertToCurrency(this.getCurrentCredit())
      editedUser.credit -= this.convertToCurrency(product.price)
      editedProduct.amount = product.amount - 1
    
      this.$store.dispatch('buyProduct', { user: editedUser, product: editedProduct });
    },
    updateUser: function() {
      let editedUser = {}
      editedUser._id = this.selectedUser._id
      editedUser.credit = this.convertToCurrency(this.getCurrentCredit())
      this.$store.dispatch('updateUser', editedUser).then(user => {
        this.$store.commit('UPDATE_USER', user)
        this.$store.commit('SET_USER', null)
      })
    },
    deleteUser: function() {
      this.$store.dispatch('deleteUser', this.selectedUser)
    },
    // Check if the user updated his credit
    getCurrentCredit: function() {
      return this.newCredit !== 0 ? this.newCredit : this.selectedUser.credit
    }
  },
  computed: {
    ...mapState([
      'selectedUser',
      'products'
    ])
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-bottom: 16px;
  }
  h4, h5 {
    margin: 0;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;

    .UserScanning {
      display: flex;
      // align-content: flex-start;
      width: 100%;
      height: 150px;
      margin-bottom: 16px;
      align-items: center;
      .user {
        align-self: flex-start;
        display: flex;
        text-align: center;
        align-self: center;
        .userRight {
          margin-left: 16px;
        }
      }
      .scanning {
        display: flex;
        justify-content: center;
        width: 100%;
        color: grey;
      }
    }
    .produtctContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
      .products {
        width: 100%;
        display: flex;
        overflow: auto;
        flex-wrap: nowrap;
        .ItemCard {
          margin-right: 8px;
        }
      }
      h2 {
        margin-bottom: 8px;
      }
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

