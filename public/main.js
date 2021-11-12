const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const sequelize = require('./database');

function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
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

const USER = {
    "admin": {
        "username": "admin",
        "password": "qwerty"
    },
    "user": {
        "username": "user",
        "password": "123456"
    }
}

ipcMain.handle('login', async (event, args) => {
    const { username, password } = args;

    const fetchedUser = USER[username];
    if (!fetchedUser) return false;
    
    return fetchedUser.password === password;
});
