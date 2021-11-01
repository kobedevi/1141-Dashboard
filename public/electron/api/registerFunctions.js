/**
 * Register different action listeners
 */

const { ipcMain } = require("electron");
const { saveClient } = require("../db/dbFunctions");
const { formatGetClients } = require("../db/formatFunctions");
const actionsFilter = require("./globalActions/actionsFilter");
const { sendMessage } = require("./sendMessage");

module.exports = () => {
  ipcMain.on("send", (e, args) => sendMessage(args));
  ipcMain.on("action", (e, args) => actionsFilter(args));
  ipcMain.on("getClients", (e, arg) => {
    e.returnValue = formatGetClients();
  });
  ipcMain.on("saveClient", (e, args) => saveClient(args));
};
