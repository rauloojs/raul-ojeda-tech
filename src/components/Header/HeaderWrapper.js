import styled from 'styled-components';

const HeaderWrapper = styled.div`
  &.sticky {
    position: sticky;
    top: 0;
    background: white;
    transition: 0.5s box-shadow;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
  }
`;

export default HeaderWrapper;