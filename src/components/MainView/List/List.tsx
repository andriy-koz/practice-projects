import React from 'react';
import classes from './List.module.css';

const List = () => {
  return (
    <div className={classes.list}>
      <div className={classes.closedList}>
        <h3>5</h3>
        <span>Elementos agregados</span>
      </div>
    </div>
  );
};

export default List;
