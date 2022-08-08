# Cypress Demo

## Commands
- `npm run cy:open`
- `npm run cy:run`

## Steps for recording and generating an animated gif
1. Test in Electron to remove the shadows that Chrome adds
2. Open the Developer Tools and resize the Electron window to 1280x720: `window.resizeTo(1280, 710)` (UI Chrome is 30px tall.)
3. Record via Loom at 4k video quality and only record the Cypress App.
4. Output the animated gif via Gifski
5. Export the animated gifs @ 2x speed.
6. Copy into Figma
7. Crop out the Electron window chrome.
8. Resize down to 800x425
