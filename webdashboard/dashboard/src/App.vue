<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <minecraft></minecraft>
  </div>
</template>

<script>
import minecraft from './components/MinecraftServers.vue'

export default {
  name: 'app',
  components: {
    minecraft
  },
  data() {
    return {
      msg: 'Best Minecraft servers EVAR'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
