var generators = require('yeoman-generator');

var basePath = 'src/bootstrap/examples/example_';
var helpers = require('../helpers');
var path = helpers.path;

module.exports = generators.NamedBase.extend({
  generateAureliaVM: function() {
    this.fs.copyTpl(
      this.templatePath('vm.js'),
      this.destinationPath(path(this.name, '.js', basePath)),
      { Name: helpers.toCamelCase(this.name) }
    );
  },

  generateAureliaView: function() {
    this.fs.copyTpl(
      this.templatePath('view.html'),
      this.destinationPath(path(this.name, '.html', basePath)),
      {
        Name: helpers.toCamelCase(this.name),
        Hello: '${hello}'
      }
    );
  }
});
