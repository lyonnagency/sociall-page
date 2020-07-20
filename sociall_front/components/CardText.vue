<template>
  <div class="card-text d-flex justify-content-center align-items-center py-xl-5  py-3">
    <div class="content col-12 col-md-12 col-lg-8 d-flex flex-wrap py-5">
      <h2 class="ff-silver-pen text-left col-12 fs-60">{{titleCard}}</h2>
      <div class="ff-gravity fs-12 py-2 py-lg-4" v-html="bodyCard">
      </div>
      <div class="col-6 px-0">
        <button class="btn-social btn-purple py-4 fs-9 text-uppercase hvr-ripple-out before-morado-border" type="submit">Ver Catálogo</button>      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardText",
    props: {
      titleCard: {
        type: String,
        default: 'Event planning'
      },

      bodyCard: {
        type: String,
        default: `Sociall se especializa en crear, organizar y coordinar todo tipo de eventos sociales y corporativos
        de forma personalizada para `
      },
      bodyStrong: {
        type: String,
        default: 'garantizar experiencias únicas'
      }
    }
  }
</script>

<style>

</style>
