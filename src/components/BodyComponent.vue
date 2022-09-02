<template>
  <div class="container-fluid">
    <div class="row base">
      <div class="col-3 text-center">
        <NavComponent src="Logo.png" />
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col" >
            <ContentComponent msg="Its body"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavComponent from './bodycomps/NavComponent.vue';
import ContentComponent from './bodycomps/ContentComponent.vue';
export default {
  name: 'HeaderComponent',
  components: {
    NavComponent,
    ContentComponent
},
  props: {
    msg: String,
    msg2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row.base{
  min-height: 200vh;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
