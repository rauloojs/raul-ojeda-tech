import styled from 'styled-components';

const HeaderWrapper = styled.div`
  transition: all 0.3s, box-shadow 1s;
  background: #fff;
  z-index: 1;

  height: ${({ smallViewport, scrolled, hideNavbar }) => {
    if (smallViewport) {
      if (hideNavbar) {
        return '2.7rem';
      } else {
        return '235px';
      }
    } else {
      if (scrolled) {
        return '2.7rem';
      } else {
        return '165px';
      }
    }
  }}
`;

export default HeaderWrapper;