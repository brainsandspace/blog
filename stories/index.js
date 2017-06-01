import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Chunk from 'components/Chunk';
import Search from './Search';
import Post from 'components/Post';
import content from './sample.whoa';

storiesOf('Chunk', module)
  .add('with text', () => (
    <Chunk onClick={action('clicked')}>Hello Chunk</Chunk>
  ))
  .add('with some emoji', () => (
    <Chunk onClick={action('clicked')}>😀 😎 👍 💯</Chunk>
  ));

storiesOf('Post', module)
  .add('with text', () => (
    <Chunk>{content.children}</Chunk>
  ))
  
