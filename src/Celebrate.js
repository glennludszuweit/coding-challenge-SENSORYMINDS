import React from 'react';
import { Title, Winner, Action } from './styles';

function Celebrate({ setPlay, setSelectedEmotion }) {
  return (
    <div>
      <Title>You Win!!</Title>
      <Winner disabled>50K </Winner>
      <Action
        onClick={() => {
          setTimeout(() => {
            setSelectedEmotion(['c3']);
            setPlay(true);
          }, 1000);
        }}
      >
        Play Again
      </Action>
    </div>
  );
}

export default Celebrate;
