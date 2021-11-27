/**
 * Register different action listeners
 */

const { ipcMain } = require("electron");
const { saveClient, deleteClient, saveOnState } = require("../db/dbFunctions");
const { formatGetClients } = require("../db/formatFunctions");
const actionsFilter = require("./globalActions/actionsFilter");
const { sendMessage } = require("./sendMessage");
const { sendTip } = require("./sendTip");

module.exports = () => {
  ipcMain.on("send", (e, args) => sendMessage(args));
  ipcMain.on("action", (e, args) => actionsFilter(args));
  ipcMain.on("getClients", (e, arg) => {
    e.returnValue = formatGetClients();
  });
  ipcMain.on("saveClient", (e, args) => saveClient(args));
  ipcMain.on("deleteClient", (e, args) => deleteClient(args));
  ipcMain.on("saveOnState", (e, args) => saveOnState(args));
  ipcMain.on("sendTip", (e, args) => sendTip(args));
};
