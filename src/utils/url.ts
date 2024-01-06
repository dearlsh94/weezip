export const getParamValue = (params: URLSearchParams, key: string) => {
  return params.has(key) ? params.get(key) || '' : '';
};
