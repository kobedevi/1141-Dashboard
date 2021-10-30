/**
 * Register different action listeners
 */

const { ipcMain } = require("electron");
const { sendMessage } = require("./sendMessage");

module.exports = () => {
  ipcMain.on("send", (e, args) => sendMessage(args));
};
