const appData = require("../appData");

// Sort function
const sortDataById = (x, y) => {
  return x.id.localeCompare(y.id);
};

const formatGetClients = () => {
  // Get data from database
  const data = appData.dataBase.getData("/clients");

  // Change data to an array of objects
  const arr = Object.values(data);

  // Sort alphabetically
  return arr.sort(sortDataById);
};

// Manipulate data before storing in the database
const formatClientForDB = (data) => {
  return {
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
  };
};

module.exports = {
  formatGetClients,
  formatClientForDB,
};
