import styled from 'styled-components';

const Title = styled.h1`
  font-family: Lato, Helvetica, Arial, sans-serif;
  letter-spacing: -0.05em;
  font-size: 1.5em;
  margin: 0;
  padding-right: 0;
  padding-left: 0;

  & .lastname {
    color: #318ada;
  }

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

export default Title;