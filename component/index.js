var generators = require('yeoman-generator');

var basePath = 'src/_components/';
var path = require('../path').bind(null, null, null, basePath);

module.exports = generators.NamedBase.extend({
    generateAureliaVM: function () {
        this.fs.copyTpl(
            this.templatePath('vm.js'),
            this.destinationPath(path(this.name, '.js')),
            {Name: this.name}
        );
    },

    generateAureliaView: function () {
        this.fs.copyTpl(
            this.templatePath('view.html'),
            this.destinationPath(path(this.name, '.html')),
            {
                Name: this.name,
                Value: '${value}'
            }
        );
    }
});
