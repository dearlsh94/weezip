import { NAMES } from '@src/constants';

const buildURLWithParams = (endpoint: string, params: Record<string, string> = {}) => {
  const searchParams = new URLSearchParams(params).toString();
  return `${endpoint}${searchParams ? `?${searchParams}` : ''}`;
};

export const paths = Object.freeze({
  home: () => buildURLWithParams('/'),
  posts: (params?: { keyword?: string; tag?: string; series?: string }) => {
    return params?.series === NAMES.TREEPEDIA ? paths.treepedia() : buildURLWithParams('/list', params);
  },
  treepedia: () => buildURLWithParams('/treepedia'),
});

export const getParamValue = (params: URLSearchParams, key: string) => {
  return params.get(key) || '';
};
