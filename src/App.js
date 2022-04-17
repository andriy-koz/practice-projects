import './App.css';
import SelectModelOpt from './components/SelectModelOpt';
import { useState } from 'react';
import ComboBox from './components/ComboBox';
import SelectPartOpt from './components/SelectPartOpt';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const [selectedModel, setSelectedModel] = useState('iniciador');
  const [selectedPart, setSelectedPart] = useState('');

  const selectedModelHandler = e => {
    setSelectedModel(e.target.value);
  };
  const selectedPartHandler = (e, value) => {
    setSelectedPart(value);
  };

  return (
    <Container>
      <Typography
        variant='h3'
        component='h1'
        sx={{
          textAlign: 'center',
          marginBottom: 2,
          fontStyle: 'italic',
        }}>
        SCRAP
      </Typography>
      <SelectModelOpt selectedModel={selectedModelHandler} />
      {selectedModel !== 'iniciador' && (
        <ComboBox
          selectedModel={selectedModel}
          selectedPart={selectedPartHandler}
        />
      )}
      {selectedPart && <SelectPartOpt selectedPart={selectedPart} />}
    </Container>
  );
}

export default App;
