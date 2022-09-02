<template>
<div class="selection" style="width:200px;">
  <select>
    <option value="0">This Month</option>
    <option value="1">This Quarter</option>
    <option value="2">This Year</option>
    <option value="3">This Decade</option>
    
  </select>
</div>
</template>

<script>
  

export default {
  name: 'DropdownButton',
  props: {
    msg: String,
    msg2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.selection select {
  background-color: #e0e4f4;
  color: black;
  padding: 5px;
  height: 6vh;
  width: 11vw;
  border: none;
  border-radius: 50px;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.box::before {
  content: "\f13a";
  font-family: FontAwesome;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 50px;
  text-align: center;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.selection select option {
  padding: 50px;
}
.dash-title {
  font-weight: 700;
}

.row.base {
  height: 12vh;
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
