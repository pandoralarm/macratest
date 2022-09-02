<template>
  <div class="row">
    <div class="col ">
      <div class="banner w-75">
        <img src="Contents.png" class="w-100">
        <div class="top-left p-5"><span style="font-size: 5vh; font-weight: 700;">Good Morning, <br>{{ username }}</span></div>
        <div class="bottom-left p-5"><span style="font-size: 2vh; font-weight: 400;">Have a good day!</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
         username() {
          return  this.$store.state.username;
         },
    },
  props: {
    msg: String,
    msg2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=DM Sans');



.invert-icon{
  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
          filter: invert(100%);
}

.banner {
  position: relative;
  text-align: left;
  color: black;
  font-family: "DM Sans", sans-serif;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  vertical-align: middle;
  line-height: 3em;
  text-align: left;
  margin: 0 15%;
  padding: 1.5%;
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
