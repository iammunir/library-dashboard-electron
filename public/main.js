const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const sequelize = require('./database');

function createWindow() {
    const win = new BrowserWindow({
        height: 400,
        width: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    sequelize
        .sync()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

    win.loadURL(
        isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function(){
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
});

ipcMain.handle('ping', async (event, args) => {
    console.log(args);
    return "pong from back process";
});
