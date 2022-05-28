import React from 'react';
import { MyState } from '../../../App';
import classes from './List.module.css';

const List = ({ state, onClick }: { state: MyState; onClick: () => void }) => {
  const listClasses = state.openedList
    ? `${classes.list} ${classes.openedList}`
    : classes.list;
  return (
    <div className={listClasses}>
      <div className={classes.closedList} onClick={() => onClick()}>
        <h3>5</h3>
        <span>Elementos agregados</span>
      </div>
    </div>
  );
};

export default List;
