const { formatGetClients } = require("../../db/formatFunctions");
const { sendMessage } = require("../sendMessage");

module.exports = (action) => {
  // Get all the clientsData as an array
  const data = formatGetClients();

  switch (action) {
    case "start":
      console.log("Start game");
      data.forEach((item) => {
        sendMessage({ state: item.onStart, client: item.id });
      });
      break;

    case "stop":
      console.log("Stop game");
      data.forEach((item) => {
        sendMessage({ state: item.onStop, client: item.id });
      });
      break;

    case "reset":
      console.log("Reset game");
      data.forEach((item) => {
        sendMessage({ state: 0, client: item.id });
      });
      break;

    case "pause":
      console.log("Pause game");
      break;

    case "camera":
      console.log("TODO: Open camera window");
      break;

    default:
      console.log("Got wrong action");
      break;
  }
};
