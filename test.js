const clients = [
  {
    id: "",
    puzzleName: "",
    currentState: 0,
    extraStates: [
      {
        name: "",
        code: 0,
      },
    ],
    status: 0,
    ipAddress: "",
    port: 0,
    onStart: 1,
    onSolved: {
      "client-07": 0,
    },
  },
];

const gameTransitions = [
  {
    states: {
      "Client-01": 0,
      "Client-02": 0,
    },
    next: {
      "Client-01": 0,
      "Client-02": 0,
    },
  },
];
