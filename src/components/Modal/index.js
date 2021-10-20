import React from 'react';
import { Modal as AntdModal } from 'antd';
import cn from 'classnames';
import classes from './styles.module.scss';

const Modal = ({ className, ...props }) => {
  return (
    <AntdModal
      {...props}
      className={cn(classes.wrapper, className)}
    ></AntdModal>
  );
};

export default Modal;
