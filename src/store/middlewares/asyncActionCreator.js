import get from 'lodash/get';

const asyncActionCreator =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    const {
      isAsyncCall,
      baseType,
      asyncCall,
      payload = {},
      afterSuccessCall = () => {},
      afterFailureCall = () => {},
    } = action;

    if (!isAsyncCall) {
      return next(action);
    }

    if (typeof asyncCall !== 'function') {
      throw new Error('Expected asyncCall to be a function.');
    }

    try {
      dispatch({
        type: `${baseType}_REQUEST`,
        payload,
      });
      const response = await asyncCall(dispatch);
      dispatch({
        type: `${baseType}_SUCCESS`,
        payload,
        response: response || {},
      });
      afterSuccessCall(dispatch, response);
    } catch (error) {
      console.log('error', error);
      const errorObj = get(error, 'response.data') || {};
      dispatch({
        type: `${baseType}_FAILURE`,
        payload,
        error: errorObj,
      });
      afterFailureCall(dispatch, errorObj);
    }
  };

export default asyncActionCreator;
