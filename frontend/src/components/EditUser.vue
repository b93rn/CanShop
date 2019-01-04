<template>
  <SlidePage v-if="selectedUser">
    <div class="container">
      <h1>Kies Product</h1>
      <div class="UserScanning">
        <div class="user">
          <icon-card :first-name="selectedUser.firstName" :last-name="selectedUser.lastName"/>
        </div>
        <div class="scanning"></div>
      </div>
      <div class="selector">
        <number-selector :start-amount="selectedUser.credit"/>
      </div>
      <div class="buttons">
        <Button title="Bewerken" color="blue" @onClick="test" />
        <Button title="Annuleren" color="yellow" @onClick="resetSelectedUser" />
        <Button title="Verwijderen" color="red" @onClick="test" />
      </div>
    </div>
  </SlidePage>
</template>

<script>
import Button from './Button.vue'
import IconCard from './IconCard.vue'
import NumberSelector from './NumberSelector.vue'
import SlidePage from './SlidePage.vue'
import { mapState } from 'vuex'

export default {
  name: 'EditSelectedUserWindow',
  components: {
    Button,
    IconCard,
    NumberSelector,
    SlidePage
  },
  data() {
    return {
      
    }
  },
  methods: {
    resetSelectedUser: function() {
      this.$store.commit('SET_USER', null)
    },
    test: function() {
      console.log('test...')
    }
  },
  computed: {
    ...mapState([
      'selectedUser'
    ])
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-bottom: 16px;
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
      margin-bottom: 16px;
      .user {
        align-self: flex-start;
      }
      .scanning {

      }
    }
    .selector {
      width: 100%;
    }
    .buttons {
     display: flex;
     width: 100%;
     justify-content: space-between;
    }
  }
</style>

