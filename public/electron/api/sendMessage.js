const appdata = require("../appData");
const { clients } = require("../vars/clients");

// Sendmessage function, use when no default state is available
const sendMessage = (e, args) => {
  const { state, client } = args;

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
