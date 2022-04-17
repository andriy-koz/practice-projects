import RadioGroup from './RadioGroup';
import data from '../data.json';
import { PanoramaPhotosphere } from '@mui/icons-material';

const SelectModelOpt = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <RadioGroup
        formLabel={data.artefactos.label}
        onChange={props.artefactosChange}
        options={data.artefactos.options}
      />
      {props.artefactos === 'cocinas' && (
        <RadioGroup
          formLabel={data.lineas.cocinas.label}
          onChange={props.cocinasChange}
          options={data.lineas.cocinas.options}
        />
      )}
      {props.artefactos === 'termotanques' && (
        <RadioGroup
          formLabel={data.lineas.termos.label}
          onChange={props.termotanquesChange}
          options={data.lineas.termos.options}
        />
      )}
      {props.termotanques === 'termotanquesACQ' && (
        <RadioGroup
          formLabel={data.modelos.termos.acq.label}
          options={data.modelos.termos.acq.options}
          onChange={props.selectedModel}
        />
      )}
      {props.termotanques === 'termotanquesEL' && (
        <RadioGroup
          formLabel={data.modelos.termos.electricos.label}
          options={data.modelos.termos.electricos.options}
          onChange={props.selectedModel}
        />
      )}
      {props.cocinas === 'cocinasQ' && (
        <RadioGroup
          formLabel={data.modelos.cocinas.q.label}
          options={data.modelos.cocinas.q.options}
          onChange={props.selectedModel}
        />
      )}
      {props.cocinas === 'cocinasE' && (
        <RadioGroup
          formLabel={data.modelos.cocinas.e.label}
          options={data.modelos.cocinas.e.options}
          onChange={props.selectedModel}
        />
      )}
    </div>
  );
};

export default SelectModelOpt;
