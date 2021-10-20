import { authTypes } from '../types';
export const updateUsers = (data) => {
  return {
    type: authTypes.UPDATE_USERS,
    payload: data,
  };
};
export const logout = () => {
  return {
    type: authTypes.LOGOUT,
  };
};

export const login = (data, cb) => {
  return {
    isAsyncCall: true,
    baseType: authTypes.LOGIN,
    payload: data,
    asyncCall: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            ...data,
            token: 'loginToken',
          });
        }, 1000);
      });
    },
    afterSuccessCall: (dispatch, response) => {
      dispatch(updateUsers(response.email));
      if (cb) cb(response);
    },
    afterFailureCall: (_dispatch, err) => {
      if (cb) cb(false, err);
    },
  };
};
