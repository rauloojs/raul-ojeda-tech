import React from 'react';
import { storiesOf } from '@storybook/react';

import Positions from './index';

const positions = [
  {
    node: {
      "id": 1,
      "title": "Full Stack Web Developer",
      "company": "Procodific",
      "dates": "Sep 17 - Now",
      "description": "Working for data market client located in Denver, Colorado. Helping to upgrade RoR version to 5.1.3, and developing frontend from Invision mockups.",
      "shortDescription": "This is a short description",
      "tags": ["React", "Ruby on Rails", "Node", "React on rails"]
    }
  },
  {
    node: {
      "id": 2,
      "title": "Full Stack Web Developer",
      "company": "Kimetrics",
      "dates": "Feb 15 - Sep 17",
      "description": "CRM-like platform oriented to data analysis and field management. Staff on field uses a mobile app connected to a web platform feeding the data warehouse. Working as full-stack web developer, leader of frontend and backend projects.",
      "tags": ["React", "Angular", "Django"]
    }
  }
]

storiesOf('Positions', module)
  .add('Positions without selected item', () => (
    <Positions positions={positions} />
  ))
  .add('Positions with selected item', () => (
    <Positions
      positions={positions}
      selectedItem={true}
    />
  ))
