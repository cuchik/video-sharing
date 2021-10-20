import toast from 'helper/toast';
import { videoTypes } from '../types';

export const shareVideo = (data, cb) => {
  return {
    isAsyncCall: true,
    baseType: videoTypes.SHARE_VIDEO,
    payload: data,
    asyncCall: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
    },
    afterSuccessCall: (_dispatch, response) => {
      if (cb) cb(response);
      toast.success('Shared video successfully!');
    },
    afterFailureCall: (_dispatch, err) => {
      if (cb) cb(false, err);
      toast.success('Shared video failed. Please try again!');
    },
  };
};
