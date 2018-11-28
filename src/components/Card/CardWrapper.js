import styled from 'styled-components';

const CardWrapper = styled.a`
  background-color: white;
  width: auto;
  font-size: 1.5rem;
  padding: 1rem;
  color: #676767;
  cursor: pointer;
  transition: all 0.4s;

  @media only screen and (min-width: 960px) {
    &:hover {
      color: inherit;
      background-color: #ebebeb;
      padding: 1.5rem;
      font-size: 2rem;
    }
  }
`;

export default CardWrapper;