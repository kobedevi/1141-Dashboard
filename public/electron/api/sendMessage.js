const appdata = require("../appData");
const { clients } = require("../vars/clients");

// Sendmessage function
const sendMessage = ({ state, client }) => {
  const { ipAddress, port } = clients[client];

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
