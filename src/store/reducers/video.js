import {
  asyncActionTypeFailure,
  asyncActionTypeRequest,
  asyncActionTypeSuccess,
  videoTypes,
} from '../types';
import get from 'lodash/get';

const initialVideoState = {
  sharedVideos: {
    loading: false,
    data: {},
    error: '',
  },
  shareVideo: {
    loading: false,
    data: {},
    error: '',
  },
};

export default (state = initialVideoState, action) => {
  const { email, ...videoInfo } = action?.response || {};
  const oldSharedVideos = { ...(state.sharedVideos.data || {}) };
  if (email) {
    oldSharedVideos[email] = [videoInfo, ...(oldSharedVideos[email] || [])];
  }

  switch (action.type) {
    // SHARE_VIDEO
    case asyncActionTypeRequest(videoTypes.SHARE_VIDEO): {
      return {
        ...state,
        shareVideo: {
          data: {},
          error: '',
          loading: true,
        },
      };
    }
    case asyncActionTypeSuccess(videoTypes.SHARE_VIDEO): {
      return {
        ...state,
        shareVideo: {
          data: action.response,
          loading: false,
          error: '',
        },
        sharedVideos: {
          ...state.sharedVideos,
          data: oldSharedVideos,
        },
      };
    }
    case asyncActionTypeFailure(videoTypes.SHARE_VIDEO): {
      return {
        ...state,
        shareVideo: {
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
