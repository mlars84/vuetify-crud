<template>
  <v-container fluid>
    <v-btn dark to="posts">{{ name }}</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    name: 'Posts'
  })
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
