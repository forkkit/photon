configure({
  sources: [
    source('amd', 'ephox.photon', '../../src/main/js', mapper.hierarchical),
    source('amd', 'ephox', '../../lib/run/depend', mapper.flat)
  ]
});
