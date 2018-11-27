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
        headerClass: (window.scrollY > 100) ? "sticky" : ""
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
        <LinkWrapper className="link-wrapper">
          <Link
            to="/"
            className="link"
          >
            <FaCode style={{
              'marginRight': '0.5em',
              'fontSize': '1.3em',
            }}/>
            <TitleWrapper>
              <Title>
                Raúl <span className="lastname">Ojeda</span>
              </Title>
              <Subtitle className="subtitle">
                Full Stack Web Developer
              </Subtitle>
            </TitleWrapper>
          </Link>
        </LinkWrapper>
        <Navbar />
      </HeaderWrapper>
    );
  }
}

export default Header
