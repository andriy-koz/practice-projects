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
        onClick={addPart}
        size='large'
        variant='contained'
        sx={{ marginTop: 4 }}>
        AGREGAR
      </Button>
    </Box>
  );
};

export default SelectPartOpt;
