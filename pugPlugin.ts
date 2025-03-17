import type { BunPlugin } from "bun";
import * as pug from "pug";

const options = { basedir: "./source" }

// Compile the source code
pug.compileFile('./source/index.pug', options);

const pugPlugin: BunPlugin = {
  name: "Pug loader",
  setup(build) {
    build.onLoad({ filter: /\.pug$/ }, async (args) => {
      const processor = postcss([autoprefixer(), tailwindcss(), cssnano()]);
      const outfile = template.replace('{{ STYLES }}', result.css);
      console.log("Bundle started!");
      return {
        contents: outfile,
        loader: 'ts'
      };
    });
  },
};

export default pugPlugin;
