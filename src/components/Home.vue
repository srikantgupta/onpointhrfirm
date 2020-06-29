
<template>
    <div class="mng_header">
        <!--<h1 class="is-danger">Home Component</h1>-->
        
        <bannerSlider />
        <contentComponent />  
    </div>
</template>

<script>
import bannerSlider from './homeComponent/banner.vue'
import contentComponent from './homeComponent/contentComponent.vue'
    export default{
        name:'Home',
//          methods: {
//     test () {
//       console.log ("parentMethod")
//       this. $refs.test.childMethod ()
//     },
//   },
  components: {bannerSlider,contentComponent}
    }
</script>
<style scoped>
.mng_header{margin-top: -53px;}
</style>