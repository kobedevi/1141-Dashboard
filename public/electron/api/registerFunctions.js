/**
 * Register different action listeners
 */

const { ipcMain } = require("electron");
const start = require("./globalActions/start");
const reset = require("./globalActions/reset");
const pause = require("./globalActions/pause");
const { sendMessage } = require("./sendMessage");

module.exports = () => {
  ipcMain.on("send", (e, args) => sendMessage(args));
  ipcMain.on("start", start);
  ipcMain.on("reset", reset);
  ipcMain.on("pause", pause);
};
