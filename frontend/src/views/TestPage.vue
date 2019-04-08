<template>
  <div class="home">
    <h1>CanShop</h1>
    <h2>CanShop</h2>
    <h3>CanShop</h3>
    <h4>CanShop</h4>
    <h5>CanShop</h5>
    <h6>CanShop</h6>
    <p>CanShop</p>
    <Button
     title="Annuleren"
     color="yellow"
     @onClick="cancel">
    </Button>
    <Button
     title="Annuleren"
     color="blue"
     @onClick="cancel">
    </Button>
    <Button
     title="Annuleren"
     color="red"
     @onClick="cancel">
    </Button>
    <Button
     title="Annuleren"
     color="green" 
     @onClick="cancel">
    </Button>
    <!-- <IconCard
      text="+"
    /> -->
    <UserCard 
      :v-if="users"
      v-for="user in users"
        :user="user"
        :key="user.id"
    />
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import IconCard from '../components/IconCard.vue'
import UserCard from '../components/UserCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      userOne: {
        firstName: 'Hendrik',
        lastName: 'Tempelman',
        credit: -0.1
      }
    }
  },
  components: {
    Button,
    IconCard,
    UserCard
  },
  methods: {
    cancel: function() {
      this.$store.dispatch('loadUsers')
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
</style>

