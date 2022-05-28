import React, { useReducer } from 'react';
import { MyState, Part } from '../../App';
import Input from './Input/Input';
import List from './List/List';
import classes from './MainView.module.css';
import PartDisplay from './PartDisplay/PartDisplay';

interface MyListStructre {
  name: string;
  code: string;
  amount: number;
}
[];

const initialState = [{ name: '', code: '', amount: 0 }];

const reducerFunc = (
  state: MyListStructre,
  action: { type: string; code?: string }
) => {
  if (action.type === 'ADD_ITEM') {
    return;
  }
  if (action.type === 'REMOVE_ITEM') {
    return;
  }
  if (action.type === 'MODIFY_ITEM') {
    return;
  }
  return state;
};

const MainView = ({
  navState,
  onOverlayClick,
  onPartSelect,
  onListClick,
}: {
  navState: MyState;
  onOverlayClick: (id: string) => void;
  onPartSelect: (part: Part) => void;
  onListClick: () => void;
}) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const title =
    navState.selectedModel !== '' ? (
      <h1>
        Modelo <span>{navState.selectedModel}</span>
      </h1>
    ) : (
      <h1>Registro de Scrap</h1>
    );

  return (
    <>
      {navState.openedNav && (
        <div onClick={() => onOverlayClick('')} className={classes.overlay} />
      )}
      <div className={classes.mainView}>
        {title}
        {navState.selectedModel && (
          <Input
            onPartSelect={onPartSelect}
            selectedModel={navState.selectedModel}
          />
        )}
        {!navState.selectedModel && <h2>Selecciona un modelo</h2>}
        {navState.selectedPart.name && <PartDisplay navState={navState} />}
        <List state={navState} onClick={onListClick} />
      </div>
    </>
  );
};

export default MainView;
