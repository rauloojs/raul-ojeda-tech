import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa';
import throttle from 'lodash/throttle';

import HeaderWrapper from './HeaderWrapper';
import Navbar from '../Navbar';
import SiteTitle from '../SiteTitle';
import Backdrop from '../Backdrop';

let scrollListener, resizeListener = null;

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hideNavbar: true,
      scrolled: false,
      smallViewport: true,
    };
  }

  componentDidMount () {
    // Set smallViewport here where window is defined
    this.setState({
      smallViewport: window.innerWidth < 960
    });

    scrollListener = throttle((event) => {
      this.setState({
        scrolled: window.scrollY > 100
      })
    }, 100);

    resizeListener = throttle((event) => {
      this.setState({
        smallViewport: window.innerWidth < 960
      });
    }, 1000);

    window.addEventListener("scroll", scrollListener)
    window.addEventListener("resize", resizeListener)
  }

  componentWillUnmount () {
    window.removeEventListener("scroll", scrollListener);
    window.removeEventListener("resize", resizeListener);
  }

  handleNavbarToggle = (e) => {
    this.setState({
      hideNavbar: !this.state.hideNavbar
    });
  }

  render() {
    const small = this.state.scrolled || this.state.smallViewport;

    return (
      <div>
        {!this.state.hideNavbar && (
          <Backdrop onClick={this.handleNavbarToggle} />
        )}
        <HeaderWrapper
          smallViewport={this.state.smallViewport}
          scrolled={this.state.scrolled}
          hideNavbar={this.state.hideNavbar}
          className={`w-100 flex items-start items-center-l fixed ${small ? ' pt0-l flex-column flex-row-l justify-between-l ph3 shadow-bottom justify-center': 'pt4 pb2 flex-column justify-between'}`}
        >
          <SiteTitle small={small} />
          <FaBars
            className="absolute dn-l right-1 pointer op-90 glow"
            style={{ top: 16 }}
            onClick={this.handleNavbarToggle}
          />
          <Navbar hide={this.state.smallViewport && this.state.hideNavbar} />
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header
