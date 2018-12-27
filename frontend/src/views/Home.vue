<template>
<div>
  <div class="home">
    <h2>Gebruikers</h2>
    <div class="userList">
      <UserCard :v-if="users" v-for="user in users" :user="user" :key="user._id" />
      <div class="addUser">
        <icon-card text="+" :onClick="addUser" />
      </div>
    </div>
    <h2>Producten</h2>
    <div class="itemList">
      <ItemCard itemName="Cola" price="0,30" quantity="37" color="#FF0741"/>
      <ItemCard itemName="Sinas" price="0,20" quantity="21" color="#F7FF07"/>
      <ItemCard itemName="Radler" price="0,70" quantity="9" color="#FFCD07"/>
      <div class="addItem">
        <icon-card text="+" :onClick="addUser" />
      </div>
    </div>
  </div>
  <CreateUser />
</div>
</template>

<script>
// import Button from '../components/Button.vue'
import IconCard from '../components/IconCard.vue'
import UserCard from '../components/UserCard.vue'
import ItemCard from '../components/ItemCard.vue'
import CreateUser from '../components/CreateUser.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    UserCard,
    IconCard,
    CreateUser,
    ItemCard
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  },
  methods: {
    addUser: function() {
      console.log('Add user...')
      this.$store.commit('TOGGLE_CREATING_USER')
    }
  },
  computed: {
    ...mapState([
      'users'
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
   justify-content: flex-start;
   flex-wrap: wrap;
 }
 .itemList{
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
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
  width: 335px;
  height: 150px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
 }
</style>

