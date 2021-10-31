const appdata = require("../appData");
const { clients } = require("../vars/clients");

// Sendmessage function
const sendMessage = ({ state, client }) => {
  // Find the index of the changed object
  const objectIndex = clients.findIndex((obj) => obj.id === client);

  // Get the ip and port of the requested client
  const { ipAddress, port } = clients[objectIndex];

  appdata.udpPort.send(
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
