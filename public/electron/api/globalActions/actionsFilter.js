const appData = require("../../appData");
const { formatGetClients } = require("../../db/formatFunctions");
const { sendMessage } = require("../sendMessage");
const { openCameras } = require("./openCameras");

module.exports = (action) => {
  // Get all the clientsData as an array
  const data = formatGetClients();

  switch (action) {
    case "start":
      console.log("Start game");
      // Send active state to every client
      data.clients.forEach((item) => {
        sendMessage({ state: 1, client: item.id });
      });

      appData.mainWindow.webContents.send("timer", "start");
      break;

    case "reset":
      console.log("Reset game");
      // Send inactive state to every client
      data.clients.forEach((item) => {
        sendMessage({ state: 0, client: item.id });
      });

      appData.mainWindow.webContents.send("timer", "stop");
      break;

    case "pause":
      console.log("Pause the timer");
      appData.mainWindow.webContents.send("timer", "pause");
      break;

    case "add":
      console.log("Add 5 minutes");
      appData.mainWindow.webContents.send("timer", "add");
      break;

    case "sub":
      console.log("Subtract 5 minutes");
      appData.mainWindow.webContents.send("timer", "sub");
      break;

    case "camera":
      console.log("Open camera window");
      openCameras();
      break;

    default:
      console.log("Got wrong action");
      break;
  }
};
