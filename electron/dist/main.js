"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var baseUrl = 'http://localhost:4200';
var mainWindow;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ width: 1200, height: 900 });
    mainWindow.loadURL(baseUrl);
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, '../../dist/my-app/index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }));
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
//# sourceMappingURL=main.js.map