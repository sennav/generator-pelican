'use strict';
var Generator = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');
var moment = require('moment');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s write a new post!'
    ));

    var prompts = [{
      name: 'postTitle',
      message: 'Title'
    },
    {
      name: 'postSummary',
      message: 'Summary',
    },
    {
      name: 'postSlug',
      message: 'Slug, how the address will be (i.e. www.example.com/<my-beautiful-slug>.html)',
      default: 'new-post'
    },
    {
      name: 'postAuthor',
      message: 'Author'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.postTimestamp = moment().format("YYYY-MM-DD HH:mm:ss");
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('new_post.md'),
      this.destinationPath('content/'+this.props.postSlug+'.md'),
      this.props
    );
  }
});

