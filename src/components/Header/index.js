import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa';
import throttle from 'lodash/throttle';

import HeaderWrapper from './HeaderWrapper';
import Navbar from '../Navbar';
import SiteTitle from '../SiteTitle';
import Backdrop from '../Backdrop';
import Profiles from '../Profiles';
import MenuIconWrapper from './MenuIconWrapper';

let scrollListener, resizeListener = null;

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hideNavbar: true,
      scrolled: false,
      smallViewport: false,
    };
  }

  componentDidMount () {
    // Set smallViewport here where window is defined
    this.setState({
      smallViewport: window.innerWidth < 960
    });

    scrollListener = throttle((event) => {
      this.setState({
        scrolled: window.scrollY > 0
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
          <MenuIconWrapper className="d-flex dn-l">
            <FaBars
              onClick={this.handleNavbarToggle}
            />
          </MenuIconWrapper>
          <Navbar hide={this.state.smallViewport && this.state.hideNavbar} />
          <Profiles className={`self-center dn-l ${this.state.smallViewport && this.state.hideNavbar ? 'dn' : 'flex'}`} />
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header
