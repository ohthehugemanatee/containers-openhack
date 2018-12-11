var appRouter = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/servers", function(req, res) {
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

module.exports = appRouter;