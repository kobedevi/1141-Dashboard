const appData = require("../appData");
const { saveState } = require("../db/dbFunctions");
const { onState } = require("./puzzleLogic/onState");
const { sendPlayers } = require("./sendPlayers");

const listener = () => {
  // Listen for incoming OSC messages.
  appData.udpPort.on("message", function (oscMsg, timeTag, info) {
    console.log("An OSC message just arrived!", oscMsg);
    console.log("Remote info is: ", info);

    // Check if client is requesting playercount
    if (oscMsg.address === "/getPlayers") {
      sendPlayers(info);
    } else {
      saveState(oscMsg);
      onState(oscMsg);
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
