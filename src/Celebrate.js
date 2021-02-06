import React from 'react';
import { Container, GlobalStyle, Main, Title, Winner } from './styles';

function Celebrate() {
  return (
    <Main>
      <GlobalStyle />
      <Title>You Win!!</Title>
      <Winner disabled>50K</Winner>
    </Main>
  );
}

export default Celebrate;
