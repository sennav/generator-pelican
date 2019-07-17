'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var moment = require('moment-timezone');
var fs = require('fs');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('generator-pelican') + ' generator!'
    ));

    var prompts = [{
      name: 'projectName',
      message: 'Project Name',
      default: path.basename(process.cwd())
    },
    {
      name: 'projectDescription',
      message: 'Project Description',
    },
    {
      name: 'blogAuthor',
      message: 'Author',
      default: process.env.USER
    },
    {
      name: 'go',
      message: 'Should I stay or should I go?',
      default: 'go'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.timezone = moment.tz.guess() || 'America/New_York';
      this.props.postTimestamp = moment().format("YYYY-MM-DD HH:mm:ss");
      this.props.language = 'en';
    }.bind(this));
  };

  writing() {
    var contentFolder = "content";
    fs.existsSync(contentFolder) || fs.mkdirSync(contentFolder);
    this.fs.copyTpl(
      this.templatePath('*'),
      this.destinationPath('.'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('content/*'),
      this.destinationPath('content'),
      this.props
    );
  };

  install() {
    this.installDependencies({
        npm: true,
        bower: false,
        callback: function () {
          console.log('Fly pelican, fly!');
      }
    });
  };
}
