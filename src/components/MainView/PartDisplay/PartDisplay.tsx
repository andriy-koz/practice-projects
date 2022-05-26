import React, { useState } from 'react';
import { MyState } from '../../../App';
import classes from './PartDisplay.module.css';

const PartDisplay = ({ navState }: { navState: MyState }) => {
  const [counter, setCounter] = useState(0);

  const counterBtnHandler = (state: boolean): void => {
    setCounter(prevState => {
      if (state) {
        return prevState + 1;
      }
      if (!state && counter !== 0) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  return (
    <div className={classes.partDisplay}>
      <div className={classes.tituloContenedor}>
        <h3>{navState.selectedPart.name}</h3>
        <p className={classes.code}>{navState.selectedPart.code}</p>
      </div>
      <p className={classes.seleccionarCant}>Seleccionar cantidad:</p>
      <div className={classes.contadorContenedor}>
        <button onClick={() => counterBtnHandler(false)}>-</button>
        <p>{counter}</p>
        <button onClick={() => counterBtnHandler(true)}>+</button>
      </div>
      <button className={classes.agregarBtn}>AGREGAR</button>
    </div>
  );
};

export default PartDisplay;
