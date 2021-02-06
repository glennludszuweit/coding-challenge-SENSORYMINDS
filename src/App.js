import { useState } from 'react';
import { GlobalStyle, Main, Container, Title } from './styles';
import { winningCombo } from './data';
import Celebrate from './Celebrate';
import Play from './Play';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(['c3']);
  const [play, setPlay] = useState(true);

  for (let i = 0; i < winningCombo.length; i++) {
    let exists = 0;
    for (let j = 0; j < 5; j++) {
      if (selectedEmotion.indexOf(winningCombo[i][j]) > -1) {
        exists++;
      }
    }
    if (exists === 5) {
      setTimeout(() => {
        setPlay(false);
      }, 1000);
    }
  }

  return (
    <Main>
      <GlobalStyle />
      <Title>Programmers Bingo</Title>
      <Container>
        {!play ? (
          <Celebrate
            setPlay={setPlay}
            setSelectedEmotion={setSelectedEmotion}
          />
        ) : (
          <Play
            selectedEmotion={selectedEmotion}
            setSelectedEmotion={setSelectedEmotion}
          />
        )}
      </Container>
    </Main>
  );
}

export default App;
