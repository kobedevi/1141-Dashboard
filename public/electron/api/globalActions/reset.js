const { sendMessage } = require("../sendMessage");

module.exports = () => {
  // TODO reset logic for every puzzle
  sendMessage({ state: 0, client: "Client-01" });
  console.log("Resetting game");
};
