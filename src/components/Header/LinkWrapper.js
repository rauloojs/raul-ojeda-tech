import styled from 'styled-components';

const LinkWrapper = styled.div`
  & a {
    margin-top: 1em;
    font-size: 3em;
    text-shadow: none;
    background-image: none;
    color: #3a3a3a;
  }

  @media (max-width: 600px) {
    & a {
      font-size: 2em;
    }
  }
`;

export default LinkWrapper;