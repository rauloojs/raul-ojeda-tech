import React from 'react';
import { storiesOf } from '@storybook/react';

import Tags from './index';
import Tag from './Tag';

storiesOf('Tags', module)
  .add('Single tag', () => (
    <Tag>
      Single tag
    </Tag>
  ))
  .add('Multiple tags', () => (
    <Tags tags={['React', 'Django', 'Angular']} />
  ))
