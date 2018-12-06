<template>
  <div class="servers">
    <table>
      <thead>
        <tr>
          <th>Server name</th>
          <th>Minecraft address</th>
          <th>RCon address</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(server, index) in servers"
          :key="index"
          >
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
export default {
	data() {
    return {
      servers: [
        {
          name: 'Dummy server',
          endpoints: {
            minecraft: '10.0.0.1:25565',
            rcon: '10.0.0.1:25575'
          }
        },
        {
          name: 'Another server',
          endpoints: {
            minecraft: '10.0.0.2:25565',
            rcon: '10.0.0.2:25575'
          }
        }
      ]
    }
	//computed: { servers: () => store.state.servers },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
