<template>
  <div v-on:mouseenter="RemoveFloatingCard()" class="card-item d-flex flex-wrap justify-content-center align-items-center py-5" :class="column_size">
    <div class="col-12 text-center pt-4">
      <img width="35px" :src="require('../assets/img/icos/'+image)" alt="Expertos Event Planners">
    </div>
    <div class="col-10 pb-4">
      <p class="text-center ff-gravity mb-0 fs-14">{{titleCard}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardServices",
    props: {
      column_size: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: 'antifaz.svg'
      },
      titleCard: {
        type: String,
        default: 'antifaz.svg'
      },

    },
    methods:{
      RemoveFloatingCard(){
        const floatingCard = document.querySelector('.floating-card');
          if (floatingCard != null) {
            floatingCard.classList.remove('floating-card');
          }
      }
    }
  }
</script>

<style>

</style>
