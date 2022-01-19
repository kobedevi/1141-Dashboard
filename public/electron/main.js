const osc = require("osc");
const appData = require("./appData");
const { app, BrowserWindow } = require("electron");
const { listener } = require("./api/listener");
const registerFunctions = require("./api/registerFunctions");
const { initDataBase } = require("./db/initDataBase");
const ip = require("ip");
const isDev = require("electron-is-dev");
const path = require("path");
const { checkLive } = require("./api/globalActions/checkLive");

require("@electron/remote/main").initialize();

const createWindow = () => {
  // Create a new window
  appData.mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Display the react app
  appData.mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../../build/index.html")}`
  );

  // Open devTools
  // appData.mainWindow.webContents.openDevTools();
};

// app.enableSandbox();
// When the app ir running
app.whenReady().then(() => {
  // Initialise the database
  initDataBase(app);

  // Declare UDP Port and make globally available
  appData.udpPort = new osc.UDPPort({
    localAddress: ip.address(),
    localPort: 57111,
    metadata: true,
  });

  // Init listener for messages and errors
  listener();

  // Register the actions
  registerFunctions();

  // Open the socket.
  appData.udpPort.open();
  console.log("Server running");

  // Create the window
  createWindow();

  // Check which clients are live at startup
  checkLive();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
