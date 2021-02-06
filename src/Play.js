import { languages } from './data';
import { Box, FlippedBox } from './styles';

function Play({ selectedEmotion, setSelectedEmotion }) {
  return languages.map((language, index) => (
    <div key={index}>
      {selectedEmotion && selectedEmotion.find((x) => x === language.id) ? (
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
  ));
}

export default Play;
