const appData = require("../appData");

const formatData = (data) => {
  return {
    ...data,
    port: parseInt(data.port),
    extraStates: data.extraStates.map((state) => ({
      name: state.name,
      code: parseInt(state.code),
    })),
    currentState: 0,
    status: 0,
  };
};

const saveClient = (data) => {
  appData.dataBase.push("/clients", [formatData(data)], false);

  const newData = appData.dataBase.getData("/clients");

  appData.mainWindow.webContents.send("dataChange", newData);
};

module.exports = { saveClient };
