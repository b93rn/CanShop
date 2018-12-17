<template>
  <slide-page v-if="creatingUser">
    <div class="creatingUser">
      <h1>Nieuwe Gebruiker</h1>
      <div class="userForm">
        <input type="text" placeholder="Voornaam" v-model="user.firstName">
        <input type="text" placeholder="Achternaam" v-model="user.lastName">
      </div>
      <div class="buttons">
        <Button
        title="Annuleren"
        color="yellow"
        @onClick="cancelForm">
        </Button>
        <Button
        title="Toevoegen"
        color="green"
        @onClick="submitUser">
        </Button>
     </div>
    </div>
  </slide-page>
</template>

<script>
import SlidePage from './SlidePage.vue'
import Button from './Button.vue'
import { mapState } from 'vuex'
export default {
  name: "CreateUserPage",
  components: {
    SlidePage,
    Button
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    cancelForm: function () {
      this.$store.commit('TOGGLE_CREATING_USER')
    },
    submitUser: function() {
      if (this.user.firstName && this.user.lastName) {
        this.$store.dispatch('addUser', this.user)
      } else {
        console.error('User did not fill in all of his credentials')
      }
    }
  },
  computed: {
    ...mapState([
      'creatingUser'
    ])
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-bottom: 16px;
  }
  .creatingUser{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
  .userForm {
    display: flex;
    flex-direction: column;
    align-items: cneter;
  }
  .buttons {
    display: flex;
    width: 336px;
    justify-content: space-between;
  }
</style>

