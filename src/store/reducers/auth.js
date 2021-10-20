import {
  asyncActionTypeFailure,
  asyncActionTypeRequest,
  asyncActionTypeSuccess,
  authTypes,
} from '../types';
import get from 'lodash/get';

const initialAuthState = {
  register: {
    loading: false,
    data: {},
    error: '',
  },
  login: {
    loading: false,
    data: {},
    error: '',
  },
  users: [],
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    // LOGOUT
    case authTypes.LOGOUT: {
      return {
        ...state,
        login: {
          loading: false,
          data: {},
          error: '',
        },
      };
    }
    // REGISTER
    case authTypes.UPDATE_USERS: {
      const oldUsers = [...(state.users || [])];
      return {
        ...state,
        users: oldUsers.includes(action.payload)
          ? oldUsers
          : [...oldUsers, action.payload],
      };
    }
    // REGISTER
    case asyncActionTypeRequest(authTypes.REGISTER): {
      return {
        ...state,
        register: {
          data: {},
          error: '',
          loading: true,
        },
      };
    }
    case asyncActionTypeSuccess(authTypes.REGISTER): {
      return {
        ...state,
        register: {
          data: action.response,
          loading: false,
          error: '',
        },
      };
    }
    case asyncActionTypeFailure(authTypes.REGISTER): {
      return {
        ...state,
        register: {
          loading: false,
          error: action.payload,
          data: {},
        },
      };
    }
    // LOGIN
    case asyncActionTypeRequest(authTypes.LOGIN): {
      return {
        ...state,
        login: {
          data: {},
          error: '',
          loading: true,
        },
      };
    }
    case asyncActionTypeSuccess(authTypes.LOGIN): {
      return {
        ...state,
        login: {
          data: action.response,
          loading: false,
          error: '',
        },
      };
    }
    case asyncActionTypeFailure(authTypes.LOGIN): {
      return {
        ...state,
        login: {
          loading: false,
          error: action.payload,
          data: {},
        },
      };
    }
    default:
      return state;
  }
};
