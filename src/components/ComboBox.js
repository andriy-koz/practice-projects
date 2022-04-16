import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import data from '../data.json';

export default function ComboBox(props) {
  const selectedModel = props.selectedModel;

  return (
    <Autocomplete
      disablePortal
      id='combo-box'
      options={data.piezas[selectedModel].options}
      onChange={props.selectedPart}
      sx={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label={data.piezas[selectedModel].label} />
      )}
    />
  );
}
