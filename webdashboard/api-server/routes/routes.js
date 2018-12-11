var appRouter = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/servers", function(req, res) {
    var servers = getServers();
    const serversMock = [
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
    ];
    return res.send(serversMock);
});

}

async function getServers() {
  const path = '/home/ohthehugemanatee/.kube/config'
  const Client = require('kubernetes-client').Client
  const config = require('kubernetes-client').config
  const client = new Client({ config: config.fromKubeconfig(path), version: '1.10' })
  const endpoints = await client.api.v1.namespaces('default').endpoints.get()
//  const namespaces = await client.api.v1.namespaces.get()
  console.dir(endpoints.body.items);
}

module.exports = appRouter;