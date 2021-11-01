const appData = require("../appData");

const saveClient = (data) => {
  appData.dataBase.push("/clients", [data], false);

  const newData = appData.dataBase.getData("/clients");

  appData.mainWindow.webContents.send("dataChange", newData);
};

module.exports = { saveClient };
