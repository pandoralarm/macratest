<template>
  <div class="row">
    <div class="col ">
      <ul>
        <li @click="changemenu('Dashboard')" class="mb-1" :class="{ active: current==='Dashboard'}"><img src="icons/dash.svg" class="px-4" :class="{ invert: current==='Dashboard'}"> <span class="pl-5">Dashboard</span> </li>
        <li @click="changemenu('Employees')" class="my-1" :class="{ active: current==='Employees'}"><img src="icons/employee.svg" class="px-4" :class="{ invert: current==='Employees'}"> <span class="pl-5">Employees</span> </li>
        <li @click="changemenu('Assets')" class="my-1" :class="{ active: current==='Assets'}"><img src="icons/assets.svg" class="px-4" :class="{ invert: current==='Assets'}"> <span class="pl-5">Assets</span> </li>
        <li @click="changemenu('References')" class="my-1" :class="{ active: current==='References'}"><img src="icons/references.svg" class="px-4" :class="{ invert: current==='References'}"> <span class="pl-5">References</span> </li>
        <li @click="changemenu('Report')" class="my-1" :class="{ active: current==='Report'}"><img src="icons/report.svg" class="px-4" :class="{ invert: current==='Report'}"> <span class="pl-5">Report</span>  <i class="bi bi-chevron-right" style="float:right; margin-right: 3%; "></i> </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
         current() {
          return  this.$store.state.current;
         },
    },
  props: {
    msg: String,
    msg2: String
  },
  methods: {
    changemenu(Value) {
      this.$store.commit('updatecurrent', Value);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.invert{
  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
          filter: invert(100%);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}


li {
  font-size: 2vh;
  cursor: pointer;
  vertical-align: middle;
  line-height: 3em;
  text-align: left;
  width: 65%;
  margin: 0 15%;
  padding: 1.5%;
}


li:hover {
  background-color: #e0e4f4;
  border-radius: 15px;
}

li.active{
  border-radius: 15px;
  background-color: #58C5C8;
  color: white;
}
a {
  color: #42b983;
}
</style>
