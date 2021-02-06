import React from 'react';
import { Title, Winner, Replay } from './styles';

function Celebrate({ setPlay, setSelectedEmotion }) {
  return (
    <div>
      <Title>You Win!!</Title>
      <Winner disabled>50K </Winner>
      <Replay
        onClick={() => {
          setTimeout(() => {
            setSelectedEmotion(['c3']);
            setPlay(true);
          }, 1000);
        }}
      >
        Play Again
      </Replay>
    </div>
  );
}

export default Celebrate;
