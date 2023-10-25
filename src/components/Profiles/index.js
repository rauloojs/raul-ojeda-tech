import React from 'react';
import Card from '../Card';
import { FaClock, FaLinkedinIn, FaGithub, FaFile } from 'react-icons/fa';

import cv from '../../files/CV.pdf';

const Profiles = ({ className }) => {
  return (
    <div className={className}>
      <Card
        icon={<FaLinkedinIn />}
        link="https://www.linkedin.com/in/rauloojs/"
        title="My LinkedIn profile" />
      <Card
        icon={<FaGithub />}
        link="https://github.com/rauloojs"
        title="My GitHub profile" />
      <Card
        icon={<FaFile />}
        link={cv}
        download="Raúl Ojeda CV"
        title="Download my resume" />
    </div>
  );
};

export default Profiles;