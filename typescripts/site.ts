import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faSimCard } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faSimCard, faTerminal);

function onDomReady() {
  dom.watch();
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", onDomReady);
} else {
  // `DOMContentLoaded` has already fired
  onDomReady();
}
