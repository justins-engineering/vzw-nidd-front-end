import { serve } from "bun";
import * as pug from "pug";

const index = pug.compileFile('./source/index.pug');

const server = serve({
  routes: {
    "/": {
      return index;
    },
  },
  development: true,
});

console.log(`Listening on ${server.url}`);
