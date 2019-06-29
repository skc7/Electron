console.log("Main process working");

const electron = require("electron");


const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");

let win;

function createWindow(){
    win = new BrowserWindow({ width: 338, height: 538, resizable: false});
    win.loadURL(url.format({
        pathname : path.join(__dirname, "index.html"),
        protocol : 'file',
        slashes : true
    }));

    win.on('closed',()=>{
        win = null;
    })
}

app.on('ready',createWindow);