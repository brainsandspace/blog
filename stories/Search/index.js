import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import jot from './jot.whoa';
import boldText from './bold-text.whoa';

import Chunk from 'components/Chunk';

storiesOf('Search', module).add('with text', () => (
  <Chunk>{jot.children}</Chunk>
)).add('with more text', () => (
  <Chunk>{boldText.children}</Chunk>
));
