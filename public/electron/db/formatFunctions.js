const appData = require("../appData");

const formatGetClients = () => {
  const data = appData.dataBase.getData("/clients");
  return Object.values(data);
};

const formatClientCreation = (data) => {
  return {
    [data.id]: {
      ...data,
      port: parseInt(data.port),
      extraStates: data.extraStates.map((state) => ({
        name: state.name,
        code: parseInt(state.code),
      })),
      currentState: 0,
      status: 0,
    },
  };
};

module.exports = {
  formatGetClients,
  formatClientCreation,
};
