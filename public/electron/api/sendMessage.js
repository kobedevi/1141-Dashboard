const appData = require("../appData");

// Sendmessage function
const sendMessage = ({ state, client }) => {
  // Get the data from the database
  const data = appData.dataBase.getData("/clients");

  // Find the index of the changed object
  const objectIndex = data.findIndex((obj) => obj.id === client);

  // Get the ip and port of the requested client
  const { ipAddress, port } = data[objectIndex];

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
