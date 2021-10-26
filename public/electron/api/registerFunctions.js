/**
 * Register different action endpoints
 */

const { ipcMain } = require("electron");
const {
  sendMessage,
  deactivateClient,
  activateClient,
  solveClient,
} = require("./sendFunctions");

module.exports = () => {
  ipcMain.on("send", sendMessage);
  ipcMain.on("deactivate", deactivateClient);
  ipcMain.on("activate", activateClient);
  ipcMain.on("solve", solveClient);
};
