import { navigate } from 'gatsby';

interface PostsFilter {
  keyword?: string;
  tag?: string;
  series?: string;
}

export const getPostsPageURL = ({ keyword = '', tag = '', series = '' }: PostsFilter) => {
  const params = new URLSearchParams();
  if (keyword) {
    params.set('keyword', keyword);
  }
  if (tag) {
    params.set('tag', tag);
  }
  if (series) {
    params.set('series', series);
  }

  return `/list${params.size > 0 ? `?${params.toString()}` : ``}`;
};

export const moveToPostsPage = ({ keyword, tag, series }: PostsFilter) => {
  navigate(getPostsPageURL({ keyword, tag, series }));
};

export const getParamValue = (params: URLSearchParams, key: string) => {
  return params.has(key) ? params.get(key) || '' : '';
};

export const getSeriesURL = (seriesName: string) => {
  if (!seriesName) return '/list';

  return seriesName === '트리피디아' ? '/treepedia' : `/list?series=${encodeURIComponent(seriesName)}`;
};
