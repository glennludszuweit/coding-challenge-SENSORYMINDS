import { useState } from 'react';
import { GlobalStyle, Main, Container, Title, Action } from './styles';
import { winningCombo } from './data';
import Celebrate from './Celebrate';
import Play from './Play';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(['c3']);
  const [play, setPlay] = useState(true);

  winningCombo.forEach((combo) => {
    let exists = 0;
    combo.forEach((el) => {
      if (selectedEmotion.indexOf(el) > -1) {
        exists++;
      }
      if (exists === 5) {
        setTimeout(() => {
          setPlay(false);
        }, 1000);
      }
    });
  });

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
      {play && (
        <Action
          onClick={() => {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          Change Card
        </Action>
      )}
    </Main>
  );
}

export default App;
