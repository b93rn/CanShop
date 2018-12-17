<template>
 <div class="userContainer" v-bind:class="getBackgroundClass" @click="$emit('SelectUser')">
   <IconCard 
    :text="getUserLetters"
   />
   <!-- temp -->
   <div>
    <p class="biggerP">{{user.firstName}}</p>
     <h6>{{user.credit | currency}}</h6>
   </div>
 </div>
</template>

<script>
import IconCard from '../components/IconCard.vue'
export default {
  name: "UserCard",
  props: {
    user: Object
  },
  components: {
    IconCard
  },
  computed: {
    getUserLetters: function() {
      return (this.user.firstName.charAt(0) + this.user.lastName.charAt(0)).toUpperCase()
    },
    getBackgroundClass: function() {
      if(this.user.credit >= 1) {
        return 'green'
      } else if (this.user.credit >= 0) {
        return 'yellow'
      } else {
        return 'red'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.userContainer {
  width: 128px;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 16px;
  margin-bottom: 16px;
  // temp
  border-radius: 16px;

  h5, h6 {
    margin: 0;
    text-align: center;
  }
  .biggerP {
    font-size: 20px;
    margin: 0;
  }
}
</style>

