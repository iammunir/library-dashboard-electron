const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('preload', {
    login: (args) => ipcRenderer.invoke('login', args),
    tambahBuku: (args) => ipcRenderer.invoke('tambahBuku', args),
    ambilBuku: (args) => ipcRenderer.invoke('ambilBuku', args),
    updateBuku: (args) => ipcRenderer.invoke('updateBuku', args),
    deleteBuku: (args) => ipcRenderer.invoke('deleteBuku', args),
    tambahUser: (args) => ipcRenderer.invoke('tambahUser', args),
    ambilUser: (args) => ipcRenderer.invoke('ambilUser', args),
    updateUser: (args) => ipcRenderer.invoke('updateUser', args),
    deleteUser: (args) => ipcRenderer.invoke('deleteUser', args),
});

