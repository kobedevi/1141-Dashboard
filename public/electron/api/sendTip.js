const { dialog } = require("electron");
const appData = require("../appData");

const display = {
  ipAddress: "192.168.0.186",
  port: 57112,
};

// Send message to a client
const sendTip = (tip) => {
  // Get data from database
  const data = appData.dataBase.getData("/clients/Client-00");

  // Check if the defaultClient is defined
  if (data.ipAddress && data.port) {
    appData.udpPort.send(
      {
        address: "/tip",
        args: {
          type: "s",
          value: tip,
        },
      },
      display.ipAddress,
      display.port
    );

    // Send the tip to the renderer process so it can be set as placeholder
    appData.mainWindow.webContents.send("tipSend", tip);
  } else {
    dialog.showErrorBox(
      "Sending Error",
      "Please configure the defaultClient first!"
    );
  }
};

module.exports = {
  sendTip,
};
