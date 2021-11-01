const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const appData = require("../appData");

const initDataBase = () => {
  appData.dataBase = new JsonDB(new Config("dataBase", true, true, "/"));
};

module.exports = {
  initDataBase,
};
