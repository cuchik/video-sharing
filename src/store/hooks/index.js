import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import get from 'lodash/get';

const useReducerData = (reducerName, attr, defaultValue) => {
  return useSelector(
    (state) => get(state, `${reducerName}.${attr}`) || defaultValue
  );
};

const useStoreActions = (actions) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions || {}, dispatch);
};

export { useStoreActions, useReducerData };
