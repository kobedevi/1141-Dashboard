// State 0 = reset
// State 1 = active
// state 2 - 99 = extra states if neccesary
// State 100 = solved

// Temporary, probably data will come from a sqlite database
const clients = [
  {
    id: "Client-01",
    puzzleName: "Sensehat",
    currentState: 1,
    status: 1,
    ipAddress: "192.168.1.235",
    port: 57112,
    extraStates: [],
  },
  {
    id: "Client-02",
    puzzleName: "Test",
    currentState: 111,
    extraStates: [
      {
        name: "extrastate",
        code: 111,
      },
      {
        name: "extrastate 2",
        code: 112,
      },
    ],
    status: 0,
    ipAddress: "192.168.1.31",
    port: 57112,
  },
];

module.exports = {
  clients,
};
