<template>
<div>
  <div class="home">
    <h2>Gebruikers</h2>
    <div class="userList">
      <UserCard :v-if="users" v-for="user in getSortedUsers" :user="user" :key="user.id" @SelectUser="setSelectedUserInStore" />
      <div class="addUser">
        <icon-card text="+" :onClick="addUser" />
      </div>
    </div>
    <h2>Recent Verkocht</h2>
    <div class="salesList">
      <!-- getMinAmountOfSales -->
      <SaleItem 
        v-for="sale in this.$store.getters.getMinAmountOfSales"
        :key="sale.id"
        :sale="sale"
      />
    </div>
  </div>
  <CreateUser />
  <EditUser  v-if="selectedUser"/>
</div>
</template>

<script>
// import Button from '../components/Button.vue'
import IconCard from '../components/IconCard.vue'
import UserCard from '../components/UserCard.vue'
import CreateUser from '../components/CreateUser.vue'
import EditUser from '../components/EditUser.vue'
import SaleItem from '../components/SaleItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    UserCard,
    IconCard,
    CreateUser,
    EditUser,
    SaleItem
  },
  mounted() {
    this.$store.dispatch('loadUsers')
    this.$store.dispatch('loadProducts')
    this.$store.dispatch('loadSales')
  },
  methods: {
    addUser: function() {
      this.$store.commit('TOGGLE_CREATING_USER')
    },
    setSelectedUserInStore: function(user) {
      this.$store.commit('SET_USER', user)
    }
  },
  computed: {
    ...mapState([
      'users',
      'products',
      'selectedUser',
      'selectedProduct'
    ]),
    getSortedUsers () {
      return this.users.sort((a, b) => {
        return b.canCount - a.canCount
      })
    }
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
 .salesList{
   display: flex;
   flex-direction: column;
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

