import React from 'react';
import { MyState, Part } from '../../App';
import Input from './Input/Input';
import classes from './MainView.module.css';

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
      <h1>Selecciona un modelo</h1>
    );

  return (
    <>
      {navState.openedNav && (
        <div onClick={() => onOverlayClick('')} className={classes.overlay} />
      )}
      <div className={classes.mainView}>
        {title}
        <Input
          onPartSelect={onPartSelect}
          selectedModel={navState.selectedModel}
        />
      </div>
    </>
  );
};

export default MainView;
