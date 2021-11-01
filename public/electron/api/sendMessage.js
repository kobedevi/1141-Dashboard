const appData = require("../appData");

// Send message to a client
const sendMessage = ({ state, client }) => {
  // Get the data from the database
  const { ipAddress, port } = appData.dataBase.getData(`/clients/${client}`);

  appData.udpPort.send(
    {
      address: "/servermessage",
      args: {
        type: "i",
        value: state,
      },
    },
    ipAddress,
    port
  );
};

module.exports = {
  sendMessage,
};
