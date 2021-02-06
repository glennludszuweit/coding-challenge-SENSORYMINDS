import { useState } from 'react';
import {
  GlobalStyle,
  Main,
  Container,
  Title,
  Box,
  FlippedBox,
  Winner,
} from './styles';
import { languages, winningCombo } from './data';
import Celebrate from './Celebrate';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(['c3']);

  for (let i = 0; i < winningCombo.length; i++) {
    let exists = 0;
    for (let j = 0; j < 5; j++) {
      if (selectedEmotion.indexOf(winningCombo[i][j]) > -1) {
        exists++;
      }
    }
    if (exists === 5) {
      return <Celebrate />;
    }
  }

  return (
    <Main>
      <GlobalStyle />
      <Title>Programmers Bingo</Title>
      <Container>
        {languages.map((language, index) => (
          <div key={index}>
            {selectedEmotion &&
            selectedEmotion.find((x) => x === language.id) ? (
              <FlippedBox disabled key={index}>
                {language.name}
              </FlippedBox>
            ) : (
              <Box
                onClick={() => {
                  setSelectedEmotion([...selectedEmotion, language.id]);
                }}
              >
                {language.name}
              </Box>
            )}
          </div>
        ))}
      </Container>
    </Main>
  );
}

export default App;
