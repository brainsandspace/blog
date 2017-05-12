/**
 * PostExists
 *
 * Check whether the given post already exists (mainly for purpose of avoiding permalink collisions)
 *
 * */

const fs = require('fs');
const path = require('path');
const posts = fs.readdirSync(path.join(__dirname, '../../../app/containers/Posts/instances'));

function postExists(slug) {
  return posts.indexOf(slug) >= 0;
}

module.exports = postExists;