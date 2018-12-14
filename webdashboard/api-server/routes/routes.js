var appRouter = async function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/servers", async function(req, res) {
    var servers = await getServers();
    return res.send(servers);
});

}

async function getServers() {
  const path = '/home/ohthehugemanatee/.kube/config'
  const Client = require('kubernetes-client').Client
  const config = require('kubernetes-client').config
  const client = new Client({ config: config.fromKubeconfig(path), version: '1.10' })
  const services = await client.api.v1.namespaces('default').services.get()
  var response = [];
  for (var i = 0; i < services.body.items.length; i++) {
    var service = services.body.items[i];
    if (service.spec.type === 'LoadBalancer') {
      const ipAddress = service.status.loadBalancer.ingress[0].ip;
      var axios = require('axios');
      const mcResponse = await axios.get('https://mcapi.us/server/status?ip=' + ipAddress);
      response.push({
          name: mcResponse.data.server.name,
          endpoints: {
            minecraft: ipAddress + ':25565',
            rcon: ipAddress + ':25575'
          }
        });
      }
    }
  //.filter(Boolean);
  return response;
}

module.exports = appRouter;