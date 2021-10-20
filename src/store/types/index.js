import videoTypes from './video';
import authTypes from './auth';

export const asyncActionTypeRequest = (baseAction) => `${baseAction}_REQUEST`;
export const asyncActionTypeSuccess = (baseAction) => `${baseAction}_SUCCESS`;
export const asyncActionTypeFailure = (baseAction) => `${baseAction}_FAILURE`;

export { videoTypes, authTypes };
