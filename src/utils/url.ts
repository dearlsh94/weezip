import { NAMES } from '@src/constants';

const buildURLWithParams = (endpoint: string, params: Record<string, string> = {}) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.set(key, value);
  });
  return `${endpoint}${searchParams.size ? `?${searchParams.toString()}` : ''}`;
};

export const paths = Object.freeze({
  home: () => buildURLWithParams('/'),
  posts: (params?: { keyword?: string; tag?: string; series?: string }) => {
    if (params?.series === NAMES.TREEPEDIA) {
      return paths.treepedia();
    }
    return buildURLWithParams('/list', params as Record<string, string>);
  },
  treepedia: () => buildURLWithParams('/treepedia'),
});

export const getParamValue = (params: URLSearchParams, key: string) => {
  return params.get(key) || '';
};
