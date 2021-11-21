const { app, BrowserWindow } = require('electron');
const contextMenu = require('electron-context-menu');
const fs = require('fs');
const path = require('path');
const serve = require('electron-serve');
const windowStateKeeper = require('electron-window-state');

try {
	require('electron-reloader')(module);
} catch (e) {
	console.error(e);
}

const loadURL = serve({ directory: "." });
const port = process.env.PORT || 3000;
const dev = !app.isPackaged;
let mainWindow;

const windowStateFile = 'organizr-state.json';
const windowStatePath = app.getPath('userData');
const windowStateFilePath = path.join(windowStatePath, windowStateFile);

const createWindow = () => {
	const windowState = windowStateKeeper({
		defaultWidth: 1280,
		defaultHeight: 720,
    path: windowStatePath,
    file: windowStateFile,
	});

  const mainWindow = new BrowserWindow({
		backgroundColor: 'whitesmoke',
		titleBarStyle: 'hidden',
		autoHideMenuBar: true,
		trafficLightPosition: {
			x: 17,
			y: 32,
		},
		minHeight: 450,
		minWidth: 320,
		webPreferences: {
			enableRemoteModule: true,
			contextIsolation: true,
			nodeIntegration: true,
			spellcheck: false,
			devTools: dev,
		},
		x: windowState.x,
		y: windowState.y,
		width: windowState.width,
		height: windowState.height,
    show: false,
	});

	windowState.manage(mainWindow);

	mainWindow
    .once('ready-to-show', () => {
	  	mainWindow.show();
	  })
	  .on('close', () => {
	  	windowState.saveState(mainWindow);
	  });

	return mainWindow;
};

const loadVite = (port) => {
	mainWindow
    .loadURL(`http://localhost:${port}`)
    .catch((e) => {
		  console.log('Error loading URL, retrying', e);
		  setTimeout(() => loadVite(port), 200);
	  });
};

const createMainWindow = () => {
	mainWindow = createWindow();

	mainWindow.once('close', () => {
    mainWindow = null;
  });

	if (dev) {
    loadVite(port);
  } else {
    loadURL(mainWindow);
  }
};

const createMainWindowWithDefaultState = () => {
  fs.access(windowStateFilePath, (err) => {
    if (!err) {
      fs.unlink(windowStateFilePath, createMainWindow);
    } else {
      createMainWindow();
    }
  });
};

contextMenu({
	showLookUpSelection: false,
	showSearchWithGoogle: false,
	showCopyImage: false,
	prepend: (defaultActions, params, browserWindow) => [
		{
			label: 'Lorem ipsum',
		},
	],
});

app
  .once('ready', () => {
    if (dev) {
      createMainWindowWithDefaultState();
    } else {
      createMainWindow();
    }
  })
  .on('activate', () => {
	  if (!mainWindow) {
      createMainWindow();
	  }
  })
  .on('window-all-closed', () => {
	  if (process.platform !== 'darwin') {
      app.quit();
    }
  });
