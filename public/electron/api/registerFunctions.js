/**
 * Register different action endpoints
 */

const { ipcMain } = require("electron");
const { sendMessage } = require("./sendMessage");

module.exports = () => {
  ipcMain.on("send", sendMessage);
};
