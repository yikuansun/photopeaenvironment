const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.maximize();

}

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length == 0) createWindow();
  });
});

app.on('window-all-closed', function () { app.quit() });
