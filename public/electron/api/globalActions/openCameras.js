const { BrowserWindow } = require("electron");

const electronIsDev = require("electron-is-dev");
const path = require("path");
const appData = require("../../appData");

const openCameras = () => {
  appData.secondWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load cameras url
  appData.secondWindow.loadURL(
    electronIsDev
      ? "http://localhost:3000#Cameras"
      : `file://${path.join(__dirname, "../../../../build/index.html#Cameras")}`
  );
};

module.exports = {
  openCameras,
};
