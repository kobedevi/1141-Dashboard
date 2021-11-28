const appData = require("../../appData");
const ping = require("ping");
const { sendClients } = require("../../db/dbFunctions");

const checkLive = async () => {
  const clients = appData.dataBase.getData(`/clients`);

  // Await the whole loop before continuing
  for await (const client of Object.values(clients)) {
    const res = await ping.promise.probe(client.ipAddress);

    // Update the status in the database
    if (res.alive) {
      appData.dataBase.push(`/clients/${client.id}/status`, 1);
    } else {
      appData.dataBase.push(`/clients/${client.id}/status`, 0);
    }
  }

  // Send the new data to the render process
  sendClients();
};

module.exports = {
  checkLive,
};
