// State 0 = reset
// State 1 = active
// state 2 - 99 = extra states if neccesary
// State 100 = solved

let clients = {
  "Client-01": {
    ipAddress: "192.168.1.235",
    port: 57112,
  },
  "Client-02": {
    ipAddress: "192.168.1.31",
    port: 57112,
  },
};

module.exports = {
  clients,
};
