import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

const SelectPartOpt = ({
  addPart,
  selectedPart,
  counterInc,
  counterDec,
  counter,
}) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dataToSend = { ...selectedPart, amount: counter };

  const sendData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://scrap-registry-default-rtdb.firebaseio.com/myList.json',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(dataToSend),
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 2,
      }}>
      <Typography
        variant='h5'
        gutterBottom
        component='div'
        sx={{ marginTop: 2 }}>
        {selectedPart.label} ( {selectedPart.cod} )
      </Typography>
      <Stack direction='row' spacing={2}>
        <Button variant='outlined' onClick={counterDec}>
          -
        </Button>
        <Typography variant='h6' component='div'>
          {counter}
        </Typography>
        <Button variant='outlined' onClick={counterInc}>
          +
        </Button>
      </Stack>
      <Button
        onClick={sendData}
        size='large'
        variant='contained'
        sx={{ marginTop: 4 }}>
        AGREGAR
      </Button>
      {isLoading ?? <p>Cargando parte...</p>}
      {error ?? <p>{error}</p>}
    </Box>
  );
};

export default SelectPartOpt;
