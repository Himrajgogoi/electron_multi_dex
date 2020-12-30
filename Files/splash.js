const electron = require("electron");
const ipc = electron.ipcRenderer;

setTimeout(function(){
    ipc.send("start");
}, 5000);