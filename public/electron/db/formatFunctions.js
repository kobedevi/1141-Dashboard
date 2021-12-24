const appData = require("../appData");

// Sort function
const sortDataById = (x, y) => {
  return x.id.localeCompare(y.id);
};

const formatGetClients = () => {
  // Get data from database
  const data = appData.dataBase.getData("/");

  // Change data to an array of objects
  const clients = Object.values(data.clients);
  const cameras = Object.values(data.cameras);

  // Sort alphabetically and send
  return {
    ...data,
    clients: clients.sort(sortDataById),
    cameras: cameras.sort(sortDataById),
  };
};

// Manipulate data before storing in the database
const formatClientForDB = (data) => {
  // Create / reconfigure standard onState objects
  let onStateData = {
    0: [...(data.onState?.["0"] || [])],
    1: [...(data.onState?.["1"] || [])],
    100: [...(data.onState?.["100"] || [])],
  };

  // Add / update onState objects for every extraState
  data.extraStates.map(
    (state) =>
      (onStateData = {
        ...onStateData,
        [state.code]: [...(data.onState?.[state.code] || [])],
      })
  );

  // Return formatted data
  return {
    ...data,
    id: `Client-${data.id}`,
    port: data.port !== "" ? parseInt(data.port) : 0,
    extraStates: data.extraStates.map((state) => ({
      name: state.name,
      code: parseInt(state.code),
    })),
    onState: onStateData,
    currentState: 0,
    status: 0,
  };
};

// Manipulate data before storing in the database
const formatCameraForDB = (data) => {
  // Return formatted data
  return {
    ...data,
    id: `Camera-${data.id}`,
    port: data.port !== "" ? parseInt(data.port) : 0,

  };
};

module.exports = {
  formatGetClients,
  formatClientForDB,
  formatCameraForDB,
};
