<template>
    <div class="container">
      <div class="content">
        <h1>{{title}}</h1>
        <dragVerify :width=400 :height=70 text="Sleep naar rechts" progressBarBg="#66cc66" @passcallback="dragComplete"/>
      </div>
    </div>
</template>

<script>
import dragVerify from 'vue-drag-verify'

export default {
  name: 'lockScreen',
  props: {
    title: {
      type: String,
      default: 'Ontgrendel'
    }
  },
  data () {
    return {
    }
  },
  components: {
    dragVerify
  },
  methods: {
    dragComplete: function () {
      console.log('drag complete has triggered.')
      this.$router.push({ path: '/' })
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: 100vh;
    justify-content: center;
   align-items: flex-end;

   .content {
    text-align: center;   
    margin-bottom: 15vh;
     h1 {
       margin-bottom: 4rem;
        font-size: 2rem; 
     }
   }
  
  }
</style>
