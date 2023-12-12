await Bun.build({
  entrypoints: [
    './source/javascripts/site',
    './source/javascripts/terminal'
  ],
  outdir: './dist/javascripts',
})
