<template>
    <div class="container">
      <div class="content">
        <h4>{{quickStat}}</h4>
        <h1>{{title}}</h1>
        <dragVerify :width=400 :height=70 text="Sleep naar rechts" progressBarBg="#66cc66" @passcallback="dragComplete"/>
      </div>
    </div>
</template>

<script>
import dragVerify from 'vue-drag-verify'
import axios from 'axios'

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
      quickStat: ''
    }
  },
  mounted () {
    axios.get('http://localhost:5000/api/stats')
      .then(res => (this.quickStat = res.data))
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
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: flex-end;


   .content {
     display: flex;
     flex-direction: column;
     align-items: center;
    margin-bottom: 15vh;
      text-align: center;  
       h1 {
          margin-bottom: 4rem;
          font-size: 2rem; 
       }
       h4 {
          margin-bottom: 10rem;
        }
   }
  }
</style>
