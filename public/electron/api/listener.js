const appData = require("../appData");

const listener = () => {
  // Listen for incoming OSC messages.
  appData.udpPort.on("message", function (oscMsg, timeTag, info) {
    console.log("An OSC message just arrived!", oscMsg);
    // console.log("Remote info is: ", info);

    appData.mainWindow.webContents.send("state", {
      name: "Client-01",
      state: oscMsg.args[0].value,
    });
  });

  // Error handling
  appData.udpPort.on("error", function (err) {
    console.log(err);
  });
};

module.exports = {
  listener,
};
