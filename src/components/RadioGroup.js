import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup(props) {
  return (
    <FormControl>
      <FormLabel
        id='demo-controlled-radio-buttons-group'
        sx={{ textAlign: 'center' }}>
        {props.formLabel}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        onChange={props.onChange}>
        {props.options.map(option => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
            key={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
