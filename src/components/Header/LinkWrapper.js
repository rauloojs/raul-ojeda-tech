import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    margin-top: 0.5em;
    font-size: 3em;
    text-shadow: none;
    background-image: none;
    color: #3a3a3a;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    & a {
      font-size: 2em;
    }
  }
`;

export default LinkWrapper;