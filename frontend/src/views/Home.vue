<template>
<div>
  <div class="home">
    <h2>Gebruikers</h2>
    <div class="userList">
      <UserCard :v-if="users" v-for="user in users" :user="user" :key="user._id" @SelectUser="setSelectedUserInStore" />
      <div class="addUser">
        <icon-card text="+" :onClick="addUser" />
      </div>
    </div>
    <h2>Producten</h2>
    <div class="itemList">
      <ItemCard 
        :v-if="products"
          v-for="item in products"
          :key="item._id"
          :product="item"
      />
      <div class="addItem">
        <icon-card text="+" :onClick="addProduct" />
      </div>
    </div>
  </div>
  <CreateUser />
  <CreateProduct />
  <EditUser />
</div>
</template>

<script>
// import Button from '../components/Button.vue'
import IconCard from '../components/IconCard.vue'
import UserCard from '../components/UserCard.vue'
import ItemCard from '../components/ItemCard.vue'
import CreateUser from '../components/CreateUser.vue'
import CreateProduct from '../components/CreateProduct.vue'
import EditUser from '../components/EditUser.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    UserCard,
    IconCard,
    CreateUser,
    CreateProduct,
    ItemCard,
    EditUser
  },
  mounted() {
    this.$store.dispatch('loadUsers')
    this.$store.dispatch('loadProducts')
  },
  methods: {
    addUser: function() {
      this.$store.commit('TOGGLE_CREATING_USER')
    },
    addProduct: function() {
      this.$store.commit('TOGGLE_CREATING_PRODUCT')
    },
    setSelectedUserInStore: function(user) {
      this.$store.commit('SET_USER', user)
    }
  },
  computed: {
    ...mapState([
      'users',
      'products'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .home {
   margin: 16px; 
   h2 {
     margin-bottom: 16px;
   }
  }
 .userList {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   flex-wrap: wrap;
 }
 .itemList{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
  //  align-content: stretch;
   flex-wrap: wrap;
 }
 .addUser {
   width: 128px;
   height: 128px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .addItem {
  width: 200px;
  height: 150px;
  // margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
 }
</style>

