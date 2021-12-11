const { BrowserWindow } = require("electron");

const openCameras = () => {
  const win = new BrowserWindow({ width: 800, height: 600 });

  // Load file
  win.loadFile("public/camera.html");
};

module.exports = {
  openCameras,
};
