import isEmpty from 'lodash/isEmpty';
import { compile } from 'path-to-regexp';

const processURL = (pathRegex, params) => {
  if (isEmpty(params)) {
    return pathRegex;
  }
  const toPath = compile(pathRegex);
  return toPath(params || {}, { encode: (value) => value });
};

const abstractURL = (pathRegex) => (options) => processURL(pathRegex, options);

export default {
  // VIDEOS
  VIDEOS: abstractURL('/videos'),
};
