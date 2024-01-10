import { Terminal } from 'xterm';
import { WebglAddon } from 'xterm-addon-webgl';
import { FitAddon } from 'xterm-addon-fit';

const terminal = new Terminal();
const webglAddon = new WebglAddon();
const fitAddon = new FitAddon();

webglAddon.onContextLoss(e => {
  webglAddon.dispose();
});

function onDomReady() {
  terminal.loadAddon(fitAddon);
  terminal.open(document.getElementById('Terminal'));
  terminal.loadAddon(webglAddon);
  fitAddon.fit();

  terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", onDomReady);
} else {
  // `DOMContentLoaded` has already fired
  onDomReady();
}
