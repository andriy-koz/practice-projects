import React from 'react';
import MenuBtn from '../MenuBtn/MenuBtn';
import classes from './SideNav.module.css';
import Link from './Link/Link';
import { MyState } from '../../App';

const SideNav = ({
  openNav,
  navState,
}: {
  openNav: (id: string) => void;
  navState: MyState;
}) => {
  const menuBtnStyles = navState.openedNav
    ? `${classes.sideNav} ${classes.opened}`
    : classes.sideNav;

  return (
    <>
      <MenuBtn openMenu={openNav} opened={navState} />
      <div className={menuBtnStyles}>
        <Link text={{ content: 'Modelo', span: 'A4' }} onClick={openNav} />
        <Link text={{ content: 'Modelo', span: 'A5' }} onClick={openNav} />
        <Link text={{ content: 'Modelo', span: 'A6' }} onClick={openNav} />
      </div>
    </>
  );
};

export default SideNav;
