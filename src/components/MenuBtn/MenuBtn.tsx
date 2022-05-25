import React from 'react';
import { MyState } from '../../App';
import classes from './MenuBtn.module.css';

const MenuBtn = ({
  openMenu,
  opened,
}: {
  openMenu: (id: string) => void;
  opened: MyState;
}) => {
  const btnClasses = opened.openedNav
    ? `${classes.menuBtn} ${classes.opened}`
    : classes.menuBtn;

  const dashClasses = (text: string): string => {
    return `${classes.dash} ${classes[text]}`;
  };

  return (
    <div className={btnClasses} onClick={() => openMenu('')}>
      <div className={dashClasses('dash1')} />
      <div className={dashClasses('dash2')} />
      <div className={dashClasses('dash3')} />
    </div>
  );
};

export default MenuBtn;
