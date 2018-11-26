import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 11em;
  transition: all 0.3s, box-shadow 1s;
  background: #fff;
  position: fixed;
  width: 100%;

  & > .link-wrapper {
    flex-direction: column;
  }

  &.sticky {
    height: 2.5em;
    display: flex;
    top: 0;
    background: white;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
    justify-content: space-between;

    & > .link-wrapper {
      flex-direction: row;
      padding-left: 1em;

      & > a {
        margin-top: 0;
        font-size: 1em;
        align-content: center;

        & > div > .subtitle {
          display: none;
        }
      }
    }
  }
`;

export default HeaderWrapper;