import * as React from 'react';
import { useEffect, useState } from 'react';
import { HeadFC, PageProps } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/PostPage.scss';
import { getNotionNodeByUrl } from '@services/use-notion';
import { getPlainTextByRichText, notionNodeToJson } from '@utils/notionUtils';
import MainLayout from '@layout/MainLayout';
import SEO from '@components/header/SEO';
import ContentWrapper from '@module/ContentWrapper';
import { graphql } from 'gatsby';
import { BlockType } from '@types';
import FloatBox from '@components/ui/FloatBox';
import PostIndex from '@module/PostIndex';
import { GlobalPortal } from '@components/GlobalPortal';
import Giscus from '@components/Giscus';
import PostCaution from '@module/PostCaution';
import Breadcrumb, { BreadcrumbStep } from '@components/post/breadcrumb';
import Feedback from '@components/post/feedback';
import Share from '@components/post/share';
import OutLink from '@components/post/outLink';
import Title from '@components/post/title';
import TitleDescription from '@components/post/title/description';
import TableOfContents from '@components/post/tableOfContents';

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
  const content = notionNodeToJson(getNotionNodeByUrl(data, slug));
  const title = getPlainTextByRichText(content?.properties?.remark?.rich_text);
  const series = content?.properties?.series?.select;

  const [tableOfContents, setTableOfContents] = useState<HTMLHeadingElement[]>([]);

  const breadcrumbSteps: BreadcrumbStep[] = [
    { name: '홈', url: '/' },
    { name: '글 목록', url: '/list' },
  ];
  if (series) {
    breadcrumbSteps.push({ name: `[${series.name}] 시리즈`, url: `/list?series=${series.name}` });
  }

  React.useLayoutEffect(() => {
    const elHeaders = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3');
    if (elHeaders && elHeaders?.length > 0) {
      const headers: HTMLHeadingElement[] = [];
      elHeaders.forEach(el => {
        if (!el.className.includes('title')) headers.push(el);
      });
      setTableOfContents(headers);
    }
  }, []);

  return (
    <GlobalPortal.Provider>
      <MainLayout className="post">
        <Breadcrumb steps={breadcrumbSteps} />
        <article>
          <Title title={title} slug={slug} />
          <TitleDescription
            tag={content?.properties?.tag}
            createdDate={content?.properties?.created_date}
            editedDate={content?.properties?.edited_date}
          />
          <PostCaution lastEditedDate={new Date(content?.properties?.edited_date?.date?.start)} />
          <TableOfContents tableOfContents={tableOfContents} />
          <ContentWrapper childrens={content.children} />
        </article>
        <div className="post__footer">
          <Share />
          <Giscus />
          <OutLink series={series} />
          <Feedback />
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
