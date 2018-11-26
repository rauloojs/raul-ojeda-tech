import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaGithub } from 'react-icons/fa';

import Card from './index';

storiesOf('Card', module)
  .add('simple', () => (
    <Card
      title="Simple card"
      icon={<FaGithub />}
      link="/"
    />
  ))
