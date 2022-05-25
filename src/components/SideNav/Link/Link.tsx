import React from 'react';
import classes from './Link.module.css';

const Link = ({
  text,
  onClick,
}: {
  text: { content: string; span: string };
  onClick: (id: string) => void;
}) => {
  return (
    <a href='#' className={classes.link} onClick={() => onClick(text.span)}>
      {text.content} <span>{text.span}</span>
    </a>
  );
};

export default Link;
