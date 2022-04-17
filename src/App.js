import './App.css';
import SelectModelOpt from './components/SelectModelOpt';
import { useState } from 'react';
import ComboBox from './components/ComboBox';
import SelectPartOpt from './components/SelectPartOpt';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPart, setSelectedPart] = useState('');
  const [artefactos, setArtefactos] = useState('');
  const [cocinas, setCocinas] = useState('');
  const [termotanques, setTermotanques] = useState('');

  const handleArtefactosChange = e => {
    setArtefactos(e.target.value);
    if (e.target.value === 'cocinas') setTermotanques('');
    if (e.target.value === 'termotanques') setCocinas('');
    setSelectedModel('');
  };
  const handleCocinasChange = e => {
    setCocinas(e.target.value);
    setSelectedModel('');
  };
  const handleTermotanquesChange = e => {
    setTermotanques(e.target.value);
    setSelectedModel('');
  };
  const selectedModelHandler = e => {
    setSelectedModel(e.target.value);
    setSelectedPart('');
  };
  const selectedPartHandler = (e, value) => {
    setSelectedPart(value);
  };
  const resetSelectedModel = () => {
    setSelectedModel('');
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
      <SelectModelOpt
        selectedModel={selectedModelHandler}
        artefactosChange={handleArtefactosChange}
        artefactos={artefactos}
        cocinasChange={handleCocinasChange}
        cocinas={cocinas}
        termotanquesChange={handleTermotanquesChange}
        termotanques={termotanques}
      />
      {selectedModel && (
        <ComboBox
          selectedModel={selectedModel}
          selectedPart={selectedPartHandler}
          resetSelectedModel={resetSelectedModel}
        />
      )}
      {selectedPart && selectedModel && (
        <SelectPartOpt selectedPart={selectedPart} />
      )}
    </Container>
  );
}

export default App;
