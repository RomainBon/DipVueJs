<template>
  <div>
    <h2>Il y a {{this.$store.getters.count}} tâches</h2>
  </div>
</template>

<script>
import api from '../api';
export default {
  name: `lpHeader`,
  data() {
    return {
    };
  },
  computed: {
    count(){
      return this.$store.getters.count;
    },
  },
  
};
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
