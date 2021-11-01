const pause = require("./pause");
const reset = require("./reset");
const start = require("./start");

module.exports = (action) => {
  switch (action) {
    case "start":
      start();
      break;

    case "stop":
      reset();
      break;

    case "reset":
      reset();
      break;

    case "pause":
      pause();
      break;

    case "camera":
      console.log("TODO: Open camera window");
      break;

    default:
      console.log("Got wrong action");
      break;
  }
};
