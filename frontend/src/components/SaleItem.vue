<template>
  <transition name="slide-right">
      <div class="saleItemContainer" v-if="sale">
        <div class="circle" :style="style"></div>
        <h5>{{ sale.user.firstName }}</h5>
        <h5>{{sale.user.lastName}}</h5>
        <h5>{{sale.product.name}}</h5>
        <h5>{{sale.product.price}}</h5>
        <svg @click="removeSale" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="orange" d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'SaleItem',
  props: {  
    sale: {
      type: Object,
      required: true
    } 
  },
  methods: {
    removeSale: function() {
      this.$store.dispatch('refundProduct', this.sale)
    }
  },
  computed: {
    style () {
      return 'border: 2px solid' + this.sale.product.color + ';'
    }
  }
}
</script>

<style lang="scss" scoped>
 .saleItemContainer {
   width: 100;
   height: 50px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding-left: 25px;
   padding-right: 25px;
   align-items: center;
   margin-bottom: 16px;
   background-color: white;
   border-radius: 16px;
   -webkit-box-shadow: 1px 2px 10px 0px var(--main-black-shadow);
  -moz-box-shadow: 1px 2px 10px 0px var(--main-black-shadow);
   h5 {
     margin: 0;
   }
   .circle {
     min-width: 22px;
     min-height: 22px;
     border-radius: 50%
   }
 }

// Animations
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}
.slide-right-leave-active {
  transition: all 0.1s ease-in;
}
.slide-right-enter, .slide-right-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
}

</style>

