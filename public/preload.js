const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('preload', {
    ping: (args) => ipcRenderer.invoke('ping', args)
})
