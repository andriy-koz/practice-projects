import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import './App.css';
import ComboBox from './components/ComboBox';
import ListItemModal from './components/ListItemModal';
import ScrapList from './components/ScrapList';
import SelectModelOpt from './components/SelectModelOpt';
import SelectPartOpt from './components/SelectPartOpt';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPart, setSelectedPart] = useState('');
  const [artefactos, setArtefactos] = useState('');
  const [cocinas, setCocinas] = useState('');
  const [termotanques, setTermotanques] = useState('');
  const [counter, setCounter] = useState(0);
  const [openListItemModal, setOpenListItemModal] = useState(false);
  const [myList, setMyList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [listSelectedPart, setListSelectedPart] = useState({});

  console.log(myList);
  console.log(selectedPart);

  const sendData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://scrap-registry-default-rtdb.firebaseio.com/myList.json',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ ...myList }),
        }
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

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

  const listItemHandler = (e, item) => {
    console.log(item);
    setListSelectedPart(item);
    setOpenListItemModal(true);
  };

  const modalHandler = () => {
    setOpenListItemModal(prevState => !prevState);
  };

  const fetchData = async () => {
    const response = await fetch(
      'https://scrap-registry-default-rtdb.firebaseio.com/myList.json'
    );
    const data = await response.json();

    const myListArr = [];

    for (const item in data) {
      myListArr.push({
        cod: data[item].cod,
        label: data[item].label,
        amount: data[item].amount,
        key: item,
      });
    }
    setMyList(myListArr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onAddPartHandler = async () => {
    await sendData();
    fetchData();
  };

  const deleteItemHandler = async (e, item) => {
    fetchData();
  };
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
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
          selectedPart={selectedPart}
          isLoading={isLoading}
          error={error}
          myList={myList}
          onAdd={onAddPartHandler}
        />
      )}
      <ScrapList myList={myList} listItemHandler={listItemHandler} />
      <ListItemModal
        selectedPart={listSelectedPart}
        handleClose={modalHandler}
        open={openListItemModal ? true : false}
        onDelete={deleteItemHandler}
      />
    </Container>
  );
}

export default App;
