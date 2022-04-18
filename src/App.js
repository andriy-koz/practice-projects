import './App.css';
import SelectModelOpt from './components/SelectModelOpt';
import { useState } from 'react';
import ComboBox from './components/ComboBox';
import SelectPartOpt from './components/SelectPartOpt';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ScrapList from './components/ScrapList';
import Button from '@mui/material/Button';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPart, setSelectedPart] = useState('');
  const [artefactos, setArtefactos] = useState('');
  const [cocinas, setCocinas] = useState('');
  const [termotanques, setTermotanques] = useState('');
  const [partList, setPartList] = useState([]);
  const [counter, setCounter] = useState(0);

  const counterInc = () => setCounter(counter + 1);
  const counterDec = () => {
    if (counter > 0) setCounter(counter - 1);
  };
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
  const addPartHandler = () => {
    setPartList(prevState => [
      ...prevState,
      { label: selectedPart.label, cod: selectedPart.cod, amount: counter },
    ]);
  };

  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
        <SelectPartOpt
          counter={counter}
          counterInc={counterInc}
          counterDec={counterDec}
          addPart={addPartHandler}
          selectedPart={selectedPart}
        />
      )}
      {partList && <ScrapList partList={partList} />}
      {partList.length !== 0 && (
        <Button size='large' variant='contained' sx={{ marginTop: 4 }}>
          ENVIAR
        </Button>
      )}
    </Container>
  );
}

export default App;
