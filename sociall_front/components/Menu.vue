<template>
  <div class="menu p-0">
    <b-navbar toggleable="xl" class="text-uppercase track-200 p-0">
      <div class="d-flex justify-content-around col-12 px-0 d-xl-none py-3">
        <div class="col col-sm-3 col-lg-2 d-flex align-items-center">
          <b-navbar-toggle target="nav-collapse" class="px-0"></b-navbar-toggle>
        </div>
        <div class="col col-sm-6 col-lg-8 align-items-center justify-content-center d-none d-sm-flex">
          <img class="social-logo-menu" src="../assets/img/logos/sociall-logo.svg" alt="Sociall events">
        </div>
        <b-navbar-nav class="col col-sm-3 col-lg-2 d-flex justify-content-end login flex-row">
          <div class="text-center">

              <img v-on:click="menuUserClick" src="../assets/img/icos/login.svg" alt="Iniciar sesión Social Events"
                   width="20">

            <div class="toggle-menu-user col-12 px-0" :class="[menuUserClicked ? 'showed':'hiddenMenu']">
              <b-nav-item class="fs-12 color-purple-link d-flex justify-content-end bg-white pr-2">Iniciar sesión</b-nav-item>
              <b-nav-item class="fs-12 color-purple-link d-flex justify-content-end bg-white pr-2">Registrarse</b-nav-item>
            </div>
          </div>
        </b-navbar-nav>
      </div>
      <b-collapse id="nav-collapse" class="col-12 px-0" is-nav>
        <b-navbar-nav class="bg-purple col-xl-2 col-12 d-flex justify-content-start pl-3">
          <b-nav-item class="text-link-white phone-by-left justify-content-center d-flex pl-4" href="#">
            Asesoría Gratis
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="col-12 col-xl-8 d-flex justify-content-around px-0">
          <b-nav-item class="ml-xl-4 justify-content-center d-flex " href="#">Inicio</b-nav-item>
          <b-nav-item class="justify-content-center d-flex" href="#">Celébralo</b-nav-item>
          <b-nav-item class="justify-content-center d-flex" href="#">Servicios</b-nav-item>


          <b-nav-item class=" justify-content-center d-none d-lg-flex nav-link-img" href="/">
            <img class="social-logo-menu" src="../assets/img/logos/sociall-logo.svg" alt="Sociall events">
          </b-nav-item>


          <b-nav-item class="justify-content-center d-flex" href="#">Momentos</b-nav-item>
          <b-nav-item class="justify-content-center d-flex" href="#">Paquetes</b-nav-item>
          <b-nav-item class="justify-content-center d-flex" href="#">Contacto</b-nav-item>

        </b-navbar-nav>
        <b-navbar-nav class="col-12 col-xl-2 d-none d-xl-flex justify-content-end px-0 pr-3 ">
          <b-nav-item class="text-link-purple justify-content-center d-flex" href="#">Ingresa</b-nav-item>
          <b-nav-item class="text-link-purple justify-content-center d-none d-xl-flex align-items-center" href="#">|
          </b-nav-item>
          <b-nav-item class="text-link-purple justify-content-center d-flex login-ico-right pr-4" href="#">Registrate
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        menuUserClicked: false
      }
    },
    methods: {
      menuUserClick() {
        this.menuUserClicked = !this.menuUserClicked
      }
    }
  }
</script>

<style>

</style>
