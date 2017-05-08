/**
 * Post Generator
 */
const postExists = require('../utils/postExists');

module.exports = {
  description: 'Add a new post',
  prompts: [
    {
      type: 'input',
      name: 'slug',
      message: 'What should the slug be? Like brainsand.space/posts/:slug...',
      default: 'something-catchy',
      validate: value => {
        // This is not a fool-proof regex.
        if (/[^\s]+/.test(value)) {
          return postExists(value)
            ? 'A post with that slug already exists! Be more creative! Or add a number!'
            : true;
        }
        return 'The slug es necesario.';
      },
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your official title?',
      default: 'Arthur, King of the Britons',
      validate: value => value.length > 0 ? true : 'King of the who?',
    },
    // {
    //   type: 'confirm',
    //   name: 'classicPost',
    //   default: true,
    //   message: 'Is this a classic post?',
    // },
  ],
  actions: data => {
    const datePrefix = new Date().toISOString().match(/(.+)T/)[1];

    const actions = [
      // generate {slug}.js
      {
        type: 'add',
        path: `../../app/containers/Posts/instances/${datePrefix}_{{kebabCase slug}}/index.js`,
        templateFile: './post/post.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../app/containers/Posts/instances/${datePrefix}_{{kebabCase slug}}/index.whoa`,
        templateFile: './post/post.whoa.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: '../../app/containers/Posts/postInstances.js',
        pattern: /export\sdefault\spostInstances;/gi,
        templateFile: './post/postInstances.hbs',
      },
    ];

    return actions;
  },
};
