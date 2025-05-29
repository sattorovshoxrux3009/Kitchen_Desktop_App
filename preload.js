const { contextBridge } = require("electron");
const path = require("path");

const imagePath = path
  .join(__dirname, "build", "image.jpg")
  .replace(/\\/g, "/");
const fullPath = `file://${imagePath}`;

// backgroundImagePath ni rendererga ochamiz
contextBridge.exposeInMainWorld("electronAPI", {
  backgroundImagePath: fullPath,
});
