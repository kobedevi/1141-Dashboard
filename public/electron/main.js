var osc = require("osc");
const appdata = require("./appData");
const { app, BrowserWindow } = require("electron");
const { listener } = require("./api/listener");
const registerFunctions = require("./api/registerFunctions");

require("dotenv").config();
require("@electron/remote/main").initialize();

const createWindow = () => {
  appdata.mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  appdata.mainWindow.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  // Declare UDP Port and make globally available
  appdata.udpPort = new osc.UDPPort({
    localAddress: process.env.LOCAL_ADDRESS,
    localPort: process.env.LOCAL_PORT,
    metadata: true,
  });

  // Init listener for messages and errors
  listener();

  // Register the actions
  registerFunctions();

  // Open the socket.
  appdata.udpPort.open();
  console.log("Server running");

  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
