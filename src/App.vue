<template>
  <HeaderComponent msg="Welcome to Your Vue.js App"/>
  <BodyComponent msg="Welcome to Your Vue.js App"/>
</template>

<script>

import 'jquery/dist/jquery.js'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import HeaderComponent from './components/HeaderComponent.vue'
import BodyComponent from './components/BodyComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    BodyComponent
}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=DM Sans');

#app {
  font-family: "DM Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
