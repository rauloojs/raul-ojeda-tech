import React from 'react';
import PropTypes from 'prop-types';
import ProgressRing from '../ProgressRing';
import LanguageTitleWrapper from './LanguageTitleWrapper';
import LanguageTitle from './LanguageTitle';
import LanguageLevel from './LanguageLevel';

const Language = ({ title, level, levelNumber }) => {
  return (
    <div className="relative flex items-center justify-center mb3 mb0-ns">
      <ProgressRing
        radius={ 60 }
        stroke={ 4 }
        progress={ levelNumber }
      />
      <LanguageTitleWrapper>
        <LanguageTitle>{title}</LanguageTitle>
        <LanguageLevel>{level}</LanguageLevel>
      </LanguageTitleWrapper>
    </div>
  );
};

Language.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
  levelNumber: PropTypes.number
};

export default Language;
