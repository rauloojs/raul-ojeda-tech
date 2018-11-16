import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaCode } from 'react-icons/fa';
import HeaderWrapper from './HeaderWrapper';
import LinkWrapper from './LinkWrapper';
import Title from './Title';
import Subtitle from './Subtitle';
import TitleWrapper from './TitleWrapper';
import Navbar from '../Navbar';

let scrollListener = null;

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      headerClass: ""
    };
  }

  componentDidMount () {
    scrollListener = (event) => {
      this.setState({
        headerClass: (window.scrollY > 0) ? "sticky" : ""
      })
    };
    window.addEventListener("scroll", scrollListener)
  }

  componentWillUnmount () {
    window.removeEventListener("scroll", scrollListener);
  }

  render() {
    return (
      <HeaderWrapper className={this.state.headerClass}>
        <div className="f-row">
          <LinkWrapper className="col-xs-12">
            <Link
              to="/"
              className="f-row center-xs middle-xs"
            >
              <FaCode style={{
                'marginRight': '0.5em',
                'fontSize': '1.3em',
              }}/>
              <TitleWrapper>
                <Title>
                  {this.props.siteTitle}
                </Title>
                <Subtitle>
                  Full Stack Web Developer
                </Subtitle>
              </TitleWrapper>
            </Link>
          </LinkWrapper>
          <Navbar />
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header
