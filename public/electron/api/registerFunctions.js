/**
 * Register different action listeners
 */

const { ipcMain } = require("electron");
const { clients } = require("../vars/clients");
const actionsFilter = require("./globalActions/actionsFilter");
const { sendMessage } = require("./sendMessage");

module.exports = () => {
  ipcMain.on("send", (e, args) => sendMessage(args));
  ipcMain.on("action", (e, args) => actionsFilter(args));
  ipcMain.on("getClients", (e, arg) => {
    e.returnValue = clients;
  });
};
