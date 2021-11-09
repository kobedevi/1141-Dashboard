const appData = require("../../appData");
const { sendMessage } = require("../sendMessage");

const onSolved = ({ address }) => {
  const onSolveData = appData.dataBase.getData(`/clients${address}/onSolved`);

  onSolveData.forEach((action) => {
    sendMessage({ state: action.code, client: action.id });
  });
};
module.exports = {
  onSolved,
};
