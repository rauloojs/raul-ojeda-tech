import styled from 'styled-components';

const CardWrapper = styled.a`
  background-image: none;
  width: auto;
  min-width: 150px;
  min-height: 150px;
  font-size: 2.5em;
  color: #676767;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    color: inherit;
    background-color: #ebebeb;

    & > svg {
      transition: all 0.8s;
      transform: scale(1.2);
    }
  }
`;

export default CardWrapper;