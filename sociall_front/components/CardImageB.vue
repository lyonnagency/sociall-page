<template>
  <div class="card-image" :style="{backgroundImage:'url('+require('../assets/img/'+backgroundImageUrl+'')+')'}"></div>
</template>

<script>
  export default {
    name: "CardImageB",
    props: {
      backgroundImageUrl: {
        type:String,
        default:''
      }
    }
  }
</script>

<style>

</style>
