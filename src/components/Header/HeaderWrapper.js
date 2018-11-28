import styled from 'styled-components';

const HeaderWrapper = styled.div`
  transition: all 0.3s, box-shadow 1s;
  background: #fff;
  z-index: 1;

  height: ${({ smallViewport, scrolled, hideNavbar }) => {
    if (smallViewport) {
      if (hideNavbar) {
        return '2.5rem';
      } else {
        return '235px';
      }
    } else {
      if (scrolled) {
        return '2.5rem';
      } else {
        return '200px';
      }
    }
  }}
`;

export default HeaderWrapper;