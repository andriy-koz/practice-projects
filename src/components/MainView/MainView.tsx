import React from 'react';
import { MyState, Part } from '../../App';
import Input from './Input/Input';
import List from './List/List';
import classes from './MainView.module.css';
import PartDisplay from './PartDisplay/PartDisplay';

const MainView = ({
  navState,
  onOverlayClick,
  onPartSelect,
}: {
  navState: MyState;
  onOverlayClick: (id: string) => void;
  onPartSelect: (part: Part) => void;
}) => {
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
        <List />
      </div>
    </>
  );
};

export default MainView;
