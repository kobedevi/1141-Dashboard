const appData = require("../appData");
const { saveState } = require("../db/dbFunctions");
const { onState } = require("./puzzleLogic/onState");

const listener = () => {
  // Listen for incoming OSC messages.
  appData.udpPort.on("message", function (oscMsg, timeTag, info) {
    // console.log("An OSC message just arrived!", oscMsg);
    // console.log("Remote info is: ", info);

    saveState(oscMsg);
    onState(oscMsg);
  });

  // Error handling
  appData.udpPort.on("error", function (err) {
    console.log(err);
  });
};

module.exports = {
  listener,
};
