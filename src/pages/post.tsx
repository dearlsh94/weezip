import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/PostPage.scss';
import { getNotionNodeByUrl } from '@services/use-notion';
import { getPlainTextByRichText, notionNodeToJson } from '@utils/notion';
import SEO from '@components/header/SEO';
import { graphql } from 'gatsby';
import { BlockType, Heading2Children, ImageChildren } from '@types';
import { GlobalPortal } from '@components/GlobalPortal';
import Giscus from '@components/Giscus';
import Breadcrumb, { BreadcrumbStep } from '@components/ui/breadcrumb/Breadcrumb';
import {
  Contents,
  Feedback,
  LastEditedCaution,
  OutLink,
  Share,
  TableOfContents,
  Title,
  TitleDescription,
} from '@components/post';
import { FloatBox } from '@components/ui';
import { MainLayout } from '@layout/main';

export const Head: HeadFC = ({ data, pageContext }: any) => {
  const content = notionNodeToJson(getNotionNodeByUrl(data, pageContext.slug));
  const title = getPlainTextByRichText(content?.properties?.remark?.rich_text);
  const series = content?.properties?.series?.select?.name;
  const tagNames = content?.properties.tag?.multi_select?.map(t => t.name) || [];

  const imageBlock: ImageChildren = content?.children?.find(c => c.type === BlockType.IMAGE) as ImageChildren;
  const thumbnailUrl = imageBlock?.image
    ? `https://treefeely.notion.site/image/${encodeURIComponent(imageBlock.image?.file.url)}?table=block&id=${
        imageBlock.id
      }&cache=v2&width=1200`
    : '';

  const descriptions = [];
  descriptions.push('저자: Ethan');

  if (content?.properties?.created_date) {
    descriptions.push(`작성일: ${content?.properties?.created_date?.date.start}`);
  }
  if (content?.properties?.edited_date) {
    descriptions.push(`수정일: ${content?.properties?.edited_date?.date.start}`);
  }

  switch (series) {
    case '트리피디아':
    case '문화 소비자 시점':
      const h2Review: Heading2Children = content?.children?.filter(
        c => c.type === 'heading_2' && c.heading_2?.rich_text[0]?.plain_text === '한줄평'
      )[0] as Heading2Children;
      if (h2Review) {
        descriptions.push(`${h2Review?.heading_2?.rich_text[0]?.plain_text}`);
      }
      break;
    default:
      const h2Preface = content?.children?.filter(
        c => c.type === 'heading_2' && c.heading_2?.rich_text[0]?.plain_text === '머리말'
      )[0] as Heading2Children;
      if (h2Preface) {
        const h2PrefaceString = `, ${h2Preface?.heading_2?.rich_text.reduce((cur, t) => cur + t.plain_text, '')}`;
        descriptions.push(h2PrefaceString);
      }
      break;
  }
  return (
    <SEO
      title={title}
      description={descriptions.join(', ')}
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

  const breadcrumbSteps: BreadcrumbStep[] = [
    { name: '홈', url: '/' },
    { name: '글 목록', url: '/list' },
  ];
  if (series) {
    breadcrumbSteps.push({ name: `[${series.name}] 시리즈`, url: `/list?series=${series.name}` });
  }

  return (
    <GlobalPortal.Provider>
      <MainLayout className="post">
        <Breadcrumb steps={breadcrumbSteps} />
        <article>
          <Title title={title} slug={slug} />
          <TitleDescription
            tag={content?.properties?.tag?.multi_select}
            createdDate={content?.properties?.created_date}
            editedDate={content?.properties?.edited_date}
            useTagLink={true}
          />
          <LastEditedCaution lastEditedDate={new Date(content?.properties?.edited_date?.date?.start)} />
          <TableOfContents target={['h1', 'h2', 'h3']} />
          <Contents childrens={content?.children} />
        </article>
        <section className="post__footer">
          <Share />
          <Giscus />
          <OutLink series={series} />
          <Feedback />
        </section>
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
