import styled from 'styled-components';

const CardWrapper = styled.a`
  background-image: none;
  width: auto;
  min-width: 200px;
  min-height: 200px;
  font-size: 3em;
  color: #676767;
  cursor: pointer;
  background-position: center;
  transition: background 0.8s;

  &:hover {
    color: inherit;
    background: #ebebeb radial-gradient(circle, transparent 1%, #ebebeb 1%) center/15000%;
  }

  &:active {
    background-color: #fafafa;
    background-size: 100%;
    transition: background 0s;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default CardWrapper;