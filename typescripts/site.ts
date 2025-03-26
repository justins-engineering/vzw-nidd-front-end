import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal'
import { faSimCard } from '@fortawesome/free-solid-svg-icons/faSimCard'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons/faFileArrowDown'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'

library.add(faHouse, faSimCard, faTerminal, faFileArrowDown, faRightFromBracket, faUsers);

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
