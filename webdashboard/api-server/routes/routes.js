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
  var response = services.body.items.map(service => {
    if (service.spec.type === 'LoadBalancer') {
      return {
        name: 'Dummy name',
        endpoints: {
          minecraft: service.status.loadBalancer.ingress[0].ip + ':25565',
          rcon: service.status.loadBalancer.ingress[0].ip + ':25575'
        }
      }
    }
  }).filter(Boolean);
  return response;
}

module.exports = appRouter;