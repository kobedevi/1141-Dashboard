const appData = require("../appData");

const display = {
  ipAddress: "192.168.0.186",
  port: 57112,
};

// Send message to a client
const sendTip = (tip) => {
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
};

module.exports = {
  sendTip,
};
