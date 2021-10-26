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

// Default state functions
const deactivateClient = (e, args) => {
  sendMessage(null, { state: 0, client: args.client });
};
const activateClient = (e, args) => {
  sendMessage(null, { state: 1, client: args.client });
};
const solveClient = (e, args) => {
  sendMessage(null, { state: 100, client: args.client });
};
const checkLiveClient = (e, args) => {
  sendMessage(null, { state: 999, client: args.client });
};

module.exports = {
  sendMessage,
  deactivateClient,
  activateClient,
  solveClient,
  checkLiveClient,
};
