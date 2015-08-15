if (!this.TemplatePipelineCompiler) {
  this.TemplatePipelineCompiler = new Pipeline();
  Plugin.registerCompiler({
    extensions: ['html'],
    archMatching: 'web',
    isTemplate: true
  }, function () {
    return this.TemplatePipelineCompiler;
  });
}

TemplatePipelineCompiler = this.TemplatePipelineCompiler;
