const { formatGetClients, formatClientCreation } = require("./formatFunctions");
const appData = require("../appData");

// Send client data to render process
const sendClients = () => {
  // Get all the client data
  const data = appData.dataBase.getData("/clients");

  // Send the data to render process
  appData.mainWindow.webContents.send("dataChange", formatGetClients(data));
};

// Save new client-data
const saveClient = (data) => {
  appData.dataBase.push("/clients", formatClientCreation(data), false);

  // Send the updated data
  sendClients();
};

// Save incoming client-state
const saveState = ({ address, args }) => {
  // get the client's data
  const obj = appData.dataBase.getData(`/clients${address}`);

  // Add new state to data and save to db
  appData.dataBase.push(`/clients${address}`, {
    ...obj,
    currentState: args[0].value,
  });

  // Send the updated data
  sendClients();
};

module.exports = {
  sendClients,
  saveClient,
  saveState,
};
