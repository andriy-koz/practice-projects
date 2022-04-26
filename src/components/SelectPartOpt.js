import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SelectPartOpt = props => {
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
        {props.selectedPart.label} ( {props.selectedPart.cod} )
      </Typography>
      <Stack direction='row' spacing={2}>
        <Button variant='outlined' onClick={props.counterDec}>
          -
        </Button>
        <Typography variant='h6' component='div'>
          {props.counter}
        </Typography>
        <Button variant='outlined' onClick={props.counterInc}>
          +
        </Button>
      </Stack>
      <Button
        onClick={props.onAdd}
        size='large'
        variant='contained'
        sx={{ marginTop: 4 }}>
        AGREGAR
      </Button>
      {props.isLoading ?? <p>Cargando parte...</p>}
      {props.error ?? <p>{props.error}</p>}
    </Box>
  );
};

export default SelectPartOpt;
