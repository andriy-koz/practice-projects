import React, { ChangeEvent, useState, useEffect } from 'react';
import { Part } from '../../../App';
import classes from './Input.module.css';

const Input = ({
  onPartSelect,
  selectedModel,
}: {
  onPartSelect: (part: Part) => void;
  selectedModel: string;
}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [openedAutocomplete, setOpenedAutocomplete] = useState(false);

  const myArr = [
    { name: 'ELEMENTO', code: '313' },
    { name: 'ELEGIR', code: '818' },
    { name: 'PARTE', code: '444' },
  ];

  const filteredArr = myArr.filter(item => {
    const str = item.name;
    const enteredStr = enteredValue;
    const regex = new RegExp(enteredStr, 'gi');
    if (enteredValue !== '') {
      return regex.test(str);
    }
  });

  useEffect(() => {
    setOpenedAutocomplete(filteredArr.length !== 0 ? true : false);
  }, [filteredArr]);

  useEffect(() => {
    onPartSelect({ name: '', code: '' });
  }, [selectedModel]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const autoCompleteSelectHandler = (part: Part) => {
    setEnteredValue('');
    if (selectedModel !== '') {
      onPartSelect(part);
    }
  };

  const autocompleteClasses = openedAutocomplete
    ? `${classes.autocomplete} ${classes.autocompleteOpened}`
    : classes.autocomplete;

  const filteredArrMapCallback = (item: { name: string; code: string }) => {
    const myElement = (
      <div
        className={classes.autoCompleteEl}
        onClick={() =>
          autoCompleteSelectHandler({ name: item.name, code: item.code })
        }>
        <span>{enteredValue.toUpperCase()}</span>
        <p>{item.name.slice(enteredValue.length)}</p>
      </div>
    );

    return <div key={item.code}>{myElement}</div>;
  };

  return (
    <form
      autoComplete='off'
      onSubmit={e => {
        e.preventDefault();
        autoCompleteSelectHandler({ name: enteredValue, code: '' });
      }}>
      <div>
        <input
          className={classes.myInput}
          id='modelo'
          type='text'
          name='modelo'
          value={enteredValue}
          onChange={inputChangeHandler}
          placeholder='Ingrese el nombre de la pieza'
        />
        <div className={autocompleteClasses}>
          {filteredArr.map(filteredArrMapCallback)}
        </div>
      </div>
    </form>
  );
};

export default Input;
