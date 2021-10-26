// State 0 = reset
// State 1 = active
// state 2 - 99 = extra states if neccesary
// State 100 = solved

let clients = {
  "client-01": {
    ipAddress: "192.168.1.235",
    port: 57112,
    state: 0,
  },
  "client-02": {
    ipAddress: "192.168.1.31",
    port: 57112,
    state: 0,
  },
};

module.exports = {
  clients,
};
