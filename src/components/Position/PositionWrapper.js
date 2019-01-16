import styled from 'styled-components';

const PositionWrapper = styled.div`
  & .read-more {
    transition: all 0.2s;
  }


  @media screen and (min-width: 960px) {
    & .read-more {
      opacity: 0;
      transform: translateY(10px);
    }

    &:hover .read-more {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default PositionWrapper;