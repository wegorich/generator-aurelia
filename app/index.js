var yeoman = require('yeoman-generator');

var Generator = module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  init: function () {
    console.log('There is no logic in aurelia-base generator itself');
    console.log('please try:');
    console.log(' ');
    console.log('aurelia-base:component NAME');
    console.log('aurelia-base:example NAME');
    console.log('aurelia-base:view NAME');
    console.log(' ');
    console.log('NOTE:');
    console.log('Name can be a path');
    console.log(' ');
    console.log('Example:');
    console.log('aurelia-base:component folder/name');
  }
});

Generator.name = "Generator Aurelia Base";
