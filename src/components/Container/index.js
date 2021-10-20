import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

const Container = ({ className, children }) => {
  return <div className={cn(classes.wrapper, className)}>{children}</div>;
};

export default Container;
