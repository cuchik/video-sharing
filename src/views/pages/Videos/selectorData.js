import { useStoreActions, useReducerData } from 'store/hooks';
import * as authActions from 'store/actions/auth';
import * as videoActions from 'store/actions/video';

export const useIndexData = () => {
  return {
    currentEmail: useReducerData('auth', 'login.data.email', ''),
    sharedVideos: useReducerData('video', 'sharedVideos.data', {}),
  };
};

export const useActions = () => {
  return useStoreActions({
    ...authActions,
    ...videoActions,
  });
};
