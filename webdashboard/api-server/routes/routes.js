var appRouter = function(app) {
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