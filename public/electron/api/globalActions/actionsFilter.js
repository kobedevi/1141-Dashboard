const { formatGetClients } = require("../../db/formatFunctions");
const { sendMessage } = require("../sendMessage");

module.exports = (action) => {
  // Get all the clientsData as an array
  const data = formatGetClients();

  switch (action) {
    case "start":
      console.log("Start game");
      // Send active state to every client
      data.forEach((item) => {
        sendMessage({ state: 1, client: item.id });
      });
      break;

    case "reset":
      console.log("Reset game");
      // Send inactive state to every client
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
