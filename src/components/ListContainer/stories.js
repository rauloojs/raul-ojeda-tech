import React from 'react';
import { storiesOf } from '@storybook/react';

import ListContainer from './index';

storiesOf('ListContainer', module)
  .add('List Container without selected item', () => (
    <ListContainer
      list={(
        <div>
          list
        </div>
      )}
      content={(
        <div>
          content
        </div>
      )}
      selectedItem={false}
    />
  ))
  .add('List Container with selected item', () => (
    <ListContainer
      list={(
        <div>
          list
        </div>
      )}
      content={(
        <div>
          content
        </div>
      )}
      selectedItem={true}
    />
  ))
