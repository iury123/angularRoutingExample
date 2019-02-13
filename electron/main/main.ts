import {app, BrowserWindow} from 'electron';
import * as path from "path";
import * as url from "url";

const baseUrl = 'http://localhost:4200';

let mainWindow: BrowserWindow;

app.on('ready', createWindow);

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });

function createWindow() {
    mainWindow = new BrowserWindow({width: 1200, height: 900});
    mainWindow.loadURL(baseUrl);
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, '../../dist/my-app/index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }));

    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
