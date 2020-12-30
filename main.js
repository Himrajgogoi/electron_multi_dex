const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const ipc = electron.ipcMain;

let win;


const iconUrl = url.format({
    pathname: path.join(__dirname, "icons/network.png"),
    protocol: "file",
    slashes: true
})

function createWindow(){
    win = new BrowserWindow({webPreferences:{
        nodeIntegration: true,
        enableRemoteModule: true,
        icon: iconUrl
    }});
    win.loadURL(url.format({
        pathname : path.join(__dirname, "splash.html"),
        protocol: "file",
        slashes: true
    }));

    //for index//
    ipc.on("start", function(event){
        win.loadURL(url.format({
            pathname : path.join(__dirname, "index.html"),
            protocol: "file",
            slashes: true
        }));
    
    })

    // for clock //
    ipc.on("open-clock", function(event){
        win.loadURL(url.format({
            pathname : path.join(__dirname, "clock.html"),
            protocol: "file",
            slashes: true
        })); 
    })
    
    // for weather //
    ipc.on("open-weather", function(event){
        win.loadURL(url.format({
            pathname : path.join(__dirname, "weather.html"),
            protocol: "file",
            slashes: true
        })); 
    })
    
    // for news //
    ipc.on("open-news", function(event){
        win.loadURL(url.format({
            pathname : path.join(__dirname, "news.html"),
            protocol: "file",
            slashes: true
        })); 
    })
    
    // for youtube //
    ipc.on("open-youtube", function(event){
        electron.shell.openExternal("https://www.youtube.com/");
    })

    win.on("closed", ()=>{
        win = null;
    });
}

app.on("ready", createWindow);