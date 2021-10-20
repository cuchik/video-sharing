import React from 'react';
import cn from 'classnames';
import ReactPlayer from 'react-player';
import classes from './styles.module.scss';

const VideoPlayer = ({ className, ...other }) => {
  return <ReactPlayer {...other} className={cn(classes.wrapper, className)} />;
};

export default VideoPlayer;
