const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const sequelize = require('./database');
const { QueryTypes } = require('sequelize');

async function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    await sequelize.authenticate();

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

ipcMain.handle('login', async (event, args) => {
    const { username, password } = args;

    try {
        const fetchedUser = await sequelize.query(
            'SELECT * FROM t_admin WHERE username = :username LIMIT 1;',
            {
                replacements: {username},
                type: QueryTypes.SELECT
            }
        );
        console.log(fetchedUser)
        if (fetchedUser.length === 0) return false;
        return fetchedUser[0].password === password;
    } catch (error) {
        throw error;
    }
});

// BUKU

ipcMain.handle('tambahBuku', async (event, args) => {
    const { id, nama, jenis, pengarang } = args;

    try {
        const res = await sequelize.query(
            'INSERT INTO t_buku (id, nama, jenis, pengarang) VALUES (:id, :nama, :jenis, :pengarang);',
            {
                replacements: {id, nama, jenis, pengarang},
                type: QueryTypes.INSERT
            }
            );
        return res;
    } catch (error) {
        throw error;
    }
});

ipcMain.handle('ambilBuku', async (event, args) => {

    try {
        const res = await sequelize.query(
            'SELECT * FROM t_buku;',
            {
                type: QueryTypes.SELECT
            }
        );
        return res;
    } catch (error) {
        throw error;
    }

});

ipcMain.handle('updateBuku', async (event, args) => {
    const { id, nama, jenis, pengarang } = args;

    try {
        const res = await sequelize.query(
            'UPDATE t_buku SET nama = :nama, jenis = :jenis, pengarang = :pengarang WHERE id = :id;',
            {
                replacements: {id, nama, jenis, pengarang},
                type: QueryTypes.UPDATE
            }
        );
        return res;
    } catch (error) {
        throw error;
    }
});

ipcMain.handle('deleteBuku', async (event, args) => {
    const { id } = args;

    try {
        const res = await sequelize.query(
            'DELETE FROM t_buku WHERE id = :id;',
            {
                replacements: {id},
                type: QueryTypes.DELETE
            }
        );
        return res;
    } catch (error) {
        throw error;
    }
});

// USER

ipcMain.handle('tambahUser', async (event, args) => {
    const { id, nama, alamat, telepon } = args;

    try {
        const res = await sequelize.query(
            'INSERT INTO t_user (id, nama, alamat, telepon) VALUES (:id, :nama, :alamat, :telepon);',
            {
                replacements: {id, nama, alamat, telepon},
                type: QueryTypes.INSERT
            }
            );
        return res;
    } catch (error) {
        throw error;
    }
});

ipcMain.handle('ambilUser', async (event, args) => {

    try {
        const res = await sequelize.query(
            'SELECT * FROM t_user;',
            {
                type: QueryTypes.SELECT
            }
        );
        return res;
    } catch (error) {
        throw error;
    }

});

ipcMain.handle('updateUser', async (event, args) => {
    const { id, nama, alamat, telepon } = args;

    try {
        const res = await sequelize.query(
            'UPDATE t_user SET nama = :nama, alamat = :alamat, telepon = :telepon WHERE id = :id;',
            {
                replacements: {id, nama, alamat, telepon},
                type: QueryTypes.UPDATE
            }
        );
        return res;
    } catch (error) {
        throw error;
    }
});

ipcMain.handle('deleteUser', async (event, args) => {
    const { id } = args;

    try {
        const res = await sequelize.query(
            'DELETE FROM t_user WHERE id = :id;',
            {
                replacements: {id},
                type: QueryTypes.DELETE
            }
        );
        return res;
    } catch (error) {
        throw error;
    }
});
