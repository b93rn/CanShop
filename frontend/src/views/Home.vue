<template>
<div>
  <div class="home">
    <h2>CanShop</h2>
    <div class="userList">
      <UserCard :v-if="users" v-for="user in users" :user="user" :key="user._id" />
      <div class="addUser">
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
import CreateUser from '../components/CreateUser.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    UserCard,
    IconCard,
    CreateUser
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
 .addUser {
   width: 128px;
   height: 128px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
</style>

