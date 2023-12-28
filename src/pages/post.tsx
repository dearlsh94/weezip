import * as React from 'react';
import { useEffect, useState } from 'react';
import { HeadFC, PageProps, navigate } from 'gatsby';
import '@scss/global.scss';
import '@scss/page.scss';
import { getNotionNodeByUrl } from '@services/use-notion';
import { getPlainTextByRichText, notionNodeToJson } from '@utils/notionUtils';
import MainLayout from '@layout/MainLayout';
import SEO from '@components/header/SEO';
import ContentWrapper from '@module/ContentWrapper';
import TagBadges from '@components/post/TagBadges';
import { graphql } from 'gatsby';
import MyButton, { ButtonSize, ButtonColor, ButtonType } from '@components/ui/MyButton';
import { BlockType, Select } from '@types';
import FloatBox from '@components/ui/FloatBox';
import PostIndex from '@module/PostIndex';
import { IconCopyLink, CircleIconWrapper } from '@components/icon';
import Linker from '@components/ui/Linker';
import { GlobalPortal } from '@components/GlobalPortal';
import useClipboard from '@src/hooks/useClipboard';
import Giscus from '@components/Giscus';
import PostCaution from '@module/PostCaution';

export const Head: HeadFC = ({ data, pageContext }: any) => {
  const content = notionNodeToJson(getNotionNodeByUrl(data, pageContext.slug));
  const title = getPlainTextByRichText(content?.properties?.remark?.rich_text);
  const series = content?.properties?.series?.select?.name;
  const tagNames = content?.properties.tag?.multi_select?.map(t => t.name) || [];

  const imageBlock = content?.children?.find(c => c.type === BlockType.IMAGE);
  const thumbnailUrl = imageBlock?.image
    ? `https://treefeely.notion.site/image/${encodeURIComponent(imageBlock.image?.file.url)}?table=block&id=${
        imageBlock.id
      }&cache=v2&width=1200`
    : '';

  let desc = '저자: Ethan';
  if (content?.properties?.created_date) {
    desc += `, 작성일: ${content?.properties?.created_date?.date.start}`;
  }
  if (content?.properties?.edited_date) {
    desc += `, 수정일: ${content?.properties?.edited_date?.date.start}`;
  }
  switch (series) {
    case '트리피디아':
    case '문화 소비자 시점':
      const h2ReviewIndex = content?.children?.findIndex(
        c => c.type === 'heading_2' && c.heading_2?.rich_text[0]?.plain_text === '한줄평'
      );
      if (h2ReviewIndex) {
        desc += `, ${content?.children[h2ReviewIndex + 1]?.paragraph?.rich_text[0]?.plain_text}`;
      }
      break;
    default:
      const h2PrefaceIndex = content?.children?.findIndex(
        c => c.type === 'heading_2' && c.heading_2?.rich_text[0]?.plain_text === '머리말'
      );
      if (h2PrefaceIndex) {
        desc += `, ${content?.children[h2PrefaceIndex + 1]?.paragraph?.rich_text.reduce(
          (cur, t) => cur + t.plain_text,
          ''
        )}`;
      }
      break;
  }
  return (
    <SEO
      title={title}
      description={desc}
      pathname={pageContext.slug}
      keywords={[content?.properties?.series?.select?.name, ...tagNames]}
      thumbnail={thumbnailUrl}
    />
  );
};

const PostPage: React.FC<PageProps> = ({ data, pageContext }: any) => {
  const { slug } = pageContext;
  const { copyToClipboard } = useClipboard();
  const content = notionNodeToJson(getNotionNodeByUrl(data, slug));
  const title = getPlainTextByRichText(content?.properties?.remark?.rich_text);
  const [indexList, setIndexList] = useState<HTMLHeadingElement[]>([]);
  const [series, setSeries] = useState<Select>();
  const tagNames = content?.properties.tag?.multi_select?.map(t => t.name);

  useEffect(() => {
    const elTitleLink = document.getElementById('post-title-link');
    const onClickTitleLink = (event: MouseEvent) => {
      event.preventDefault();
    };
    if (elTitleLink) {
      elTitleLink.addEventListener('click', onClickTitleLink);
    }

    const elHeaders = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3');
    if (elHeaders && elHeaders?.length > 0) {
      const headers: HTMLHeadingElement[] = [];
      elHeaders.forEach(el => {
        if (!el.className.includes('title')) headers.push(el);
      });
      setIndexList(headers);
    }

    setSeries(content?.properties?.series?.select);

    return () => {
      if (elTitleLink) {
        elTitleLink.removeEventListener('click', onClickTitleLink);
      }
    };
  }, []);

  const handleCopy = async () => {
    await copyToClipboard(location.href);
    alert('현재 게시글 주소가 복사되었습니다.');
  };

  return (
    <GlobalPortal.Provider>
      <MainLayout className="post-layout">
        <nav className="breadcrumb">
          <ol>
            <li>
              <Linker url="/" aria-label={`첫 페이지로 이동`}>
                홈
              </Linker>
            </li>
            <li>
              <Linker url="/list" aria-label={`게시글 목록 페이지로 이동`}>
                글 목록
              </Linker>
            </li>
            {series && (
              <li>
                <Linker url={`/list?series=${series.name}`} aria-label={`${series.name} 시리즈 목록으로 이동`}>
                  [{content?.properties?.series?.select?.name}] 시리즈
                </Linker>
              </li>
            )}
          </ol>
        </nav>
        <article className="post">
          <div className="post__title">
            <a id="post-title-link" href={`https://weezip.treefeely.com${slug}`}>
              <h1 className="title">{title}</h1>
            </a>
            <div className="post__title__desc">
              <div>{tagNames && <TagBadges tagNames={tagNames} />}</div>
              <div className="post__title__desc__right">
                <div className="copy-box" onClick={handleCopy} onKeyDown={handleCopy}>
                  <IconCopyLink size={18} color="secondary" />
                </div>
                <div className="date-box">
                  {content?.properties?.created_date?.date?.start && (
                    <span className="date">작성 : {content?.properties?.created_date?.date?.start}</span>
                  )}
                  {content?.properties?.edited_date?.date?.start && (
                    <span className="date">수정 : {content?.properties?.edited_date?.date?.start}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <PostCaution lastEditedDate={new Date(content?.properties?.edited_date?.date?.start)} />
          <PostIndex list={indexList} />
          {content && (
            <div className="post__content">
              <ContentWrapper childrens={content.children} />
            </div>
          )}
        </article>
        <div className="bottom-box">
          <div className="share-box">
            <div className="copy" onClick={handleCopy}>
              <CircleIconWrapper color={'secondary'}>
                <IconCopyLink />
              </CircleIconWrapper>
            </div>
          </div>
          <div className="comment-box">
            <Giscus />
          </div>
          <div className="button-box">
            {series && (
              <Linker url={`/list?series=${series.name}`} aria-label={`${series.name} 시리즈 목록으로 이동`}>
                <MyButton
                  className="series-button"
                  size={ButtonSize.PRIMARY}
                  color={ButtonColor.PRIMARY}
                  type={ButtonType.BORDER}
                  width={'100%'}
                >
                  <span>{series.name}</span>
                  시리즈 전체보기
                </MyButton>
              </Linker>
            )}
            <Linker url={`/list`} aria-label="전체 목록 보기">
              <MyButton size={ButtonSize.PRIMARY} color={ButtonColor.PRIMARY} type={ButtonType.BORDER} width={'100%'}>
                포스트 전체보기
              </MyButton>
            </Linker>
          </div>
          <div className="feedback-box">
            <p>피드백을 기다리고 있어요! 연락 방법은 페이지 제일 하단을 확인해주세요.</p>
            <p>👇👇 Contact Me👇👇</p>
          </div>
        </div>
        <FloatBox useTop={true} />
      </MainLayout>
    </GlobalPortal.Provider>
  );
};

export const postQuery = graphql`
  query {
    allNotion {
      edges {
        node {
          id
          databaseName
          title
          json
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export default PostPage;
