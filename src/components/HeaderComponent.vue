<template>
  <div class="container-fluid">
    <div class="row base">
      <div class="col-3 pt-4 text-center">
        <img src="Logo.png" />
      </div>
      <div class="col-7 pt-4">
        <div class="row">
          <div class="col-9" >
            <span class="text-left dash-title" @update="titleupdate">{{ title }}</span>
          </div>
          <div class="col-3" >
            <DrowdownButton desc="dropdown" />
          </div>
        </div>
      </div>
      <div class="col-2 pt-3 text-center">
        <img src="user.png" style="height: 60%;"/>
      </div>
    </div>
  </div>
</template>

<script>
import DrowdownButton from "./headercomps/DrowdownButton.vue";
export default {
    name: "HeaderComponent",
    data() {
        return { 
        };
    },
    computed: {
         title() {
          return  this.$store.state.current;
         },
    },
    props: {
        msg: String,
        msg2: String
    },
    methods: {
      titleupdate(newtitle) {
        this.title = newtitle;
      }
    },
    components: { DrowdownButton }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dash-title {
  font-weight: 700;
  font-size: 5vh;
}

.row.base {
  height: 15vh;
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
