const appData = require("../appData");

const sendPlayers = (info) => {
  const players = appData.dataBase.getData(`/players`);

  appData.udpPort.send(
    {
      address: "/playerCount",
      args: {
        type: "i",
        value: players,
      },
    },
    info.address,
    info.port
  );
};

module.exports = {
  sendPlayers,
};
