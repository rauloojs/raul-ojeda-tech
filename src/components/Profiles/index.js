import React from 'react';
import Card from '../Card';
import { FaClock, FaLinkedinIn, FaGithub, FaFile } from 'react-icons/fa';

import cv from '../../files/CV.pdf';
import ProfilesWrapper from './ProfilesWrapper';

const Profiles = () => {
  return (
    <ProfilesWrapper className="row center-xs">
      <Card
        className="col-xs-12"
        icon={<FaLinkedinIn />}
        link="https://www.linkedin.com/in/rauloojs/"
        title="My LinkedIn profile" />
      <Card
        className="col-xs-12"
        icon={<FaGithub />}
        link="https://github.com/rauloojs"
        title="My GitHub profile" />
      <Card
        className="col-xs-12"
        icon={<FaClock />}
        link="https://wakatime.com/@rauloojs"
        title="My Wakatime profile" />
      <Card
        className="col-xs-12"
        icon={<FaFile />}
        link={cv}
        title="Download my resume" />
    </ProfilesWrapper>
  );
};

export default Profiles;