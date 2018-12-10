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
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  name: 'home',
  components: {
    Button
  },
  methods: {
    cancel: function() {
      console.log('Annuleren')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

