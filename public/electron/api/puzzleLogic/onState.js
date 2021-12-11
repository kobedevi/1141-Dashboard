const appData = require("../../appData");
const { sendMessage } = require("../sendMessage");

const onState = ({ address, args }) => {
  const state = args[0].value;

  // Get the onState array
  const onStateData = appData.dataBase.getData(`/clients${address}/onState`);

  // Send state change to every client in the onState array of the changed state
  onStateData[state].forEach((action) => {
    sendMessage({ state: action.code, client: action.id });
  });
};
module.exports = {
  onState,
};
