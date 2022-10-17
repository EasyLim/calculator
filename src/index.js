const { app, BrowserWindow } = require('electron')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 760,
    autoHideMenuBar: true,
    disableHtmlFullscreenWindowResize: true,
    resizable: false
  })
  win.loadFile('public/index.html')
}
app.whenReady().then(() => {
  createWindow()
})