# generator-pelican

Pelican generator is a different way to set up a Pelican blog.

## Installation

First you'll need pelican:

```bash
pip install pelican markdown
```

You'll also need [Yeoman](http://yeoman.io) and generator-pelican both installed with [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-pelican
```

Then generate your new project:

```bash
mkdir awesome-blog
cd awesome-blog
yo pelican
```

## View your blog

Just run `npm start` and let the magic begin! Write or alter anything on your content folder and the magic will happen again :)

## Bootstrap a new post

Just run `yo pelican:post` and look for a file with the same name as the chosen slug.

## Future work

* Tests
* Input check
* Initialize git repository
* Many others

Feel free to contribute!
