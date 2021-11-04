const appData = require("../appData");

const formatGetClients = () => {
  const data = appData.dataBase.getData("/clients");
  console.log("Data send");
  return Object.values(data);
};

const formatClientCreation = (data) => {
  return {
    [`Client-${data.id}`]: {
      ...data,
      id: `Client-${data.id}`,
      port: parseInt(data.port),
      extraStates: data.extraStates.map((state) => ({
        name: state.name,
        code: parseInt(state.code),
      })),
      onStart: parseInt(data.onStart),
      onStop: parseInt(data.onStop),
      onSolved: [],
      currentState: 0,
      status: 0,
    },
  };
};

module.exports = {
  formatGetClients,
  formatClientCreation,
};
