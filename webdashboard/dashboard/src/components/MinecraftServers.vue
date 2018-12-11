<template>
  <div class="servers">
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) in errors" :key="index">
        {{error.message}}
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Server name</th>
          <th>Minecraft address</th>
          <th>RCon address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(server, index) in servers" :key="index">
            <td>{{ server.name }}</td>
            <td>{{ server.endpoints.minecraft }}</td>
            <td>{{ server.endpoints.rcon }}</td>
            </tr>
      </tbody>
     </table>
  </div>
</template>

<script>
//import store from '../store';
import axios from 'axios';

export default {
  data() {
    return {
      servers: [],
      errors: []
    }
  },

  // Fetches servers when the component is created.
  async created() {
    try {
      const response = await axios.get('http://127.0.0.1:3000/servers')
      this.servers = response.data
    } catch (e) {
      this.errors.push(e)
    }
  }
  //computed: { servers: () => store.state.servers },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
