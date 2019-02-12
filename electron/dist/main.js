"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var mainWindow;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL('http://localhost:4200');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
//# sourceMappingURL=main.js.map