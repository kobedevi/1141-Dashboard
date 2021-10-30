const { sendMessage } = require("../sendMessage");

module.exports = () => {
  // TODO startup logic for every puzzle
  sendMessage({ state: 1, client: "Client-01" });
  console.log("Game started");
};
