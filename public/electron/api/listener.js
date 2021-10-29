const appdata = require("../appData");

const listener = () => {
  // Listen for incoming OSC messages.
  appdata.udpPort.on("message", function (oscMsg, timeTag, info) {
    console.log("An OSC message just arrived!", oscMsg);
    // console.log("Remote info is: ", info);
    appdata.mainWindow.webContents.send("state", {
      name: "Client-01",
      state: oscMsg.args[0].value,
    });
  });

  appdata.udpPort.on("error", function (err) {
    console.log(err);
  });
};

module.exports = {
  listener,
};
