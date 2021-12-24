const appData = require("../../appData");
const ping = require("ping");
const { sendClients } = require("../../db/dbFunctions");

const checkLive = async () => {
  const promises = [];
  const clients = appData.dataBase.getData(`/clients`);
  const clientsArray = Object.values(clients);

  // Create a promise for each client and put in in the array
  for (const client of clientsArray) {
    promises.push({
      id: client.id,
      promise: ping.promise.probe(client.ipAddress),
    });
  }

  // Execute all promises at once
  Promise.all(promises.map((client) => client.promise)).then((data) => {
    // Loop over the results once finished
    data.forEach((result, index) => {
      // Update the status in the database
      if (result.alive) {
        appData.dataBase.push(`/clients/${clientsArray[index].id}/status`, 1);
      } else {
        appData.dataBase.push(`/clients/${clientsArray[index].id}/status`, 0);
      }
    });

    // Send the new data to the render process
    sendClients();
  });
};

// const checkLiveCameras = async () => {
//   const promises = [];
//   const cameras = appData.dataBase.getData(`/cameras`);
//   const camerasArray = Object.values(cameras);

//   // Create a promise for each client and put in in the array
//   for (const camera of camerasArray) {
//     promises.push({
//       id: camera.id,
//       promise: ping.promise.probe(camera.src),
//     });
//   }

//   // Execute all promises at once
//   Promise.all(promises.map((camera) => camera.promise)).then((data) => {
//     // Loop over the results once finished
//     data.forEach((result, index) => {
//       // Update the status in the database
//       if (result.alive) {
//         appData.dataBase.push(`/cameras/${camerasArray[index].id}/status`, 1);
//       } else {
//         appData.dataBase.push(`/cameras/${camerasArray[index].id}/status`, 0);
//       }
//     });

//     // Send the new data to the render process
//     sendClients();
//   });
// };

module.exports = {
  checkLive,
  // checkLiveCameras,
};
