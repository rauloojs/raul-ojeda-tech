import React from 'react'
import { Link } from 'gatsby'
import { FaCode } from 'react-icons/fa';
import LinkWrapper from './LinkWrapper';
import Title from './Title';
import Subtitle from './Subtitle';
import TitleWrapper from './TitleWrapper';

const Header = ({ siteTitle }) => (
  <div>
    <div className="row">
      <LinkWrapper className="col-xs-12">
        <Link
          to="/"
          className="row center-xs middle-xs"
        >
          <FaCode style={{
            'margin-right': '0.5em',
            'fontSize': '1.3em',
          }}/>
          <TitleWrapper>
            <Title>
              {siteTitle}
            </Title>
            <Subtitle>
              Full Stack Web Developer
            </Subtitle>
          </TitleWrapper>
        </Link>
      </LinkWrapper>
    </div>
  </div>
)

export default Header
