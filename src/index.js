import Application from "./js/Application.js"

const { app } = new Application({ document: document.getElementById("app") });

globalThis.__PIXI_APP__ = app;
