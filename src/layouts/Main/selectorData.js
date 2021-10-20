import { useStoreActions, useReducerData } from 'store/hooks';
import * as authActions from 'store/actions/auth';
import * as videoActions from 'store/actions/video';

export const useIndexData = () => {
  return {
    loginData: useReducerData('auth', 'login.data', {}),
    loginLoading: useReducerData('auth', 'login.loading', false),
    shareVideoLoading: useReducerData('video', 'shareVideo.loading', false),
  };
};

export const useActions = () => {
  return useStoreActions({
    ...authActions,
    ...videoActions,
  });
};
