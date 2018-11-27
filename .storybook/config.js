import { configure } from '@storybook/react';
import typography from '../src/utils/typography';

import '../src/css/main.css'
import 'tachyons/css/tachyons.min.css'
import 'flexboxgrid/dist/flexboxgrid.min.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// Load typography styles
typography.injectStyles()
