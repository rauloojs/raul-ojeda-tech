import styled from 'styled-components';

const PositionWrapper = styled.div`
  & .read-more {
    opacity: 0;
    transition: all 0.2s;
    transform: translateY(10px);
  }

  &:hover .read-more {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default PositionWrapper;