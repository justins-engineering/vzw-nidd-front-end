import { Terminal } from 'xterm';
import { WebglAddon } from '@xterm/addon-webgl';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faSimCard } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faSimCard, faTerminal);

var term = new Terminal();


function doSomething() {
  term.open(document.getElementById('Terminal'));
  // term.loadAddon(new WebglAddon());
  term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
  dom.watch();
}


if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  doSomething();
}


// dom.watch();
