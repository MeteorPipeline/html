TemplatePipelineCompiler = new Pipeline();
Plugin.registerCompiler({
  extensions: ['html'],
  archMatching: 'web',
  isTemplate: true
}, function () {
  return TemplatePipelineCompiler;
});
