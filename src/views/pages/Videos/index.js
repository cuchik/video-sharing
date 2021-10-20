import React from 'react';
import { VideoPlayer } from 'components';
import { useIndexData } from './selectorData';
import classes from './styles.module.scss';

const Videos = () => {
  const { sharedVideos } = useIndexData();
  const sharedVideoKeys = Object.keys(sharedVideos);
  return (
    <div className={classes.wrapper}>
      <h1>Shared Videos</h1>
      <div className={classes.videos}>
        {sharedVideoKeys.length === 0 && (
          <div className={classes.notFound}>
            Not found shared video. Please Login/Register to share some!
          </div>
        )}
        {Object.keys(sharedVideos).map((key, i) => {
          return sharedVideos[key].map((videoObj, j) => {
            return (
              <div className={classes.video} key={`${i}_${j}`}>
                <VideoPlayer
                  url={videoObj.video}
                  controls
                  className={classes.videoPlayer}
                />
                <div className={classes.videoInformation}>
                  <h2>{videoObj.title}</h2>
                  <p className={classes.sharedBy}>Shared by: {key}</p>
                  <p className={classes.description}>{videoObj.description}</p>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Videos;
