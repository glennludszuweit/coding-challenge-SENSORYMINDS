import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  background: #000;
  max-height: 100vh
}

@keyframes pulse{
  0%{
    opacity: 0;
  }
  10%{
    opacity:.50;
    transform-origin: 50% 50%;
    transform: rotate(-2deg) scale(5);
    transition: all .3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
  100%{
    opacity:1;
    transform: rotate(-15deg) scale(1);
  }
}
`;

export const Main = styled.div`
  margin: 2.5rem auto;
  text-align: center;
`;

export const Container = styled.div`
  width: 50rem;
  height: 50rem;
  margin: 2.5rem auto;
  background: #000;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  filter: drop-shadow(0 0 1rem #39ff14);

  @media screen and (max-width: 45rem) {
    width: 30rem;
    height: 30rem;
    filter: drop-shadow(0 0 0.8rem #39ff14);
  }

  @media screen and (max-width: 30rem) {
    width: 25rem;
    height: 25rem;
    filter: drop-shadow(0 0 0.6rem #39ff14);
  }
`;

export const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #39ff14;
  text-shadow: 0.2rem 0.2rem rgba(1, 152, 117, 0.3);

  @media screen and (max-width: 45rem) {
    font-size: 3rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 2.5rem;
  }
`;

export const Action = styled.a`
  font-size: 3rem;
  font-weight: 500;
  margin: 2rem;
  text-transform: uppercase;
  color: #39ff14;
  text-shadow: 0.2rem 0.2rem rgba(1, 152, 117, 0.3);
  cursor: pointer;

  @media screen and (max-width: 45rem) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 2rem;
  }
`;

export const Box = styled.button`
  width: 10rem;
  height: 10rem;
  background: #000;
  border: 1px solid #39ff14;
  flex-grow: 1;
  filter: drop-shadow(0 0 0.5rem #39ff14);
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  color: #39ff14;
  cursor: pointer;

  @media screen and (max-width: 45rem) {
    width: 6rem;
    height: 6rem;
    font-size: 0.8rem;
    filter: drop-shadow(0 0 0.3rem #39ff14);
  }

  @media screen and (max-width: 30rem) {
    width: 5rem;
    height: 5rem;
    font-size: 0.6rem;
    filter: drop-shadow(0 0 0.15rem #39ff14);
  }
`;

export const FlippedBox = styled(Box)`
  background: #39ff14;
  color: #000;
  border: none;
`;

export const Winner = styled.button`
  color: #39ff14;
  font-weight: 700;
  font-size: 20rem;
  border: none;
  margin: 5rem auto;
  height: 50rem;
  width: 50rem;
  border-radius: 0.5rem;
  position: relative;
  background-color: #000;
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  opacity: 0;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  filter: drop-shadow(0 0 1rem #39ff14);

  @media screen and (max-width: 45rem) {
    font-size: 15rem;
    width: 30rem;
    height: 30rem;
    filter: drop-shadow(0 0 0.8rem #39ff14);
  }

  @media screen and (max-width: 30rem) {
    font-size: 10rem;
    width: 20rem;
    height: 20rem;
    filter: drop-shadow(0 0 0.6rem #39ff14);
  }
`;
