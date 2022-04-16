import './App.css';
import SelectModelOpt from './components/SelectModelOpt';
import { useState } from 'react';
import ComboBox from './components/ComboBox';

function App() {
  const [selectedModel, setSelectedModel] = useState('iniciador');

  const selectedModelHandler = e => {
    setSelectedModel(e.target.value);
  };
  const selectedPartHandler = (e, value) => {
    console.log(value);
  };

  return (
    <div className='App'>
      <SelectModelOpt selectedModel={selectedModelHandler} />
      {selectedModel !== 'iniciador' && (
        <ComboBox
          selectedModel={selectedModel}
          selectedPart={selectedPartHandler}
        />
      )}
    </div>
  );
}

export default App;
