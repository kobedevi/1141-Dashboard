const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const appData = require("../appData");
const isDev = require("electron-is-dev");

const initDataBase = (app) => {
  appData.dataBase = new JsonDB(
    isDev
      ? new Config("dataBase", true, true, "/")
      : new Config(app.getPath("userData") + "/dataBase", true, false, "/")
  );

  appData.dataBase.push("/clients", {}, false);
};

module.exports = {
  initDataBase,
};
