const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('preload', {
    login: (args) => ipcRenderer.invoke('login', args)
});
