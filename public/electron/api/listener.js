const appData = require("../appData");
const { saveState } = require("../db/dbFunctions");
const { onSolved } = require("./puzzleLogic/onSolved");

const listener = () => {
  // Listen for incoming OSC messages.
  appData.udpPort.on("message", function (oscMsg, timeTag, info) {
    console.log("An OSC message just arrived!", oscMsg);
    // console.log("Remote info is: ", info);

    saveState(oscMsg);

    if (oscMsg.args[0].value === 100) {
      onSolved(oscMsg);
    }
  });

  // Error handling
  appData.udpPort.on("error", function (err) {
    console.log(err);
  });
};

module.exports = {
  listener,
};
