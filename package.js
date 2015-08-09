Package.describe({
  name: 'pipeline:html',
  version: '0.0.1',
  summary: 'HTML Template Pipeline',
  git: 'https://github.com/MeteorPipeline/html',
  documentation: null
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('pipeline:core@0.0.1');
  api.addFiles('compiler.js');
  api.export('TemplatePipelineCompiler');
});

Package.onTest(function(api) {
  api.use(["tinytest", "underscore"]);
  api.use(["pipeline:core"]);
  api.addFiles('compiler-tests.js');
});
