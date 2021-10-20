const createTypes = (...params) => {
  const actionTypes = {};
  (params || []).map((type) => {
    actionTypes[type] = type;
    return true;
  });
  return actionTypes;
};

export default createTypes;
