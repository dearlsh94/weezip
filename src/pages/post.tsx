import { HeadFC, PageProps } from 'gatsby';

import * as React from 'react';

import '@scss/global.scss';
import '@scss/pages/PostPage.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import SEO from '@components/header/SEO';
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
import { Giscus } from '@components/post/giscus';
import { FloatBox } from '@components/ui';
import Breadcrumb, { BreadcrumbStep } from '@components/ui/breadcrumb/Breadcrumb';
import { useWeezipNotion } from '@hooks/useWeezipNotion';
import { MainLayout } from '@layout/main';
import { getPlainTextByRichText, notionNodeToJson } from '@utils/notion';

import { BlockType, ImageChildren, ParagraphChildren } from '@types';
import { getSeriesURL } from '@utils/url';

export const Head: HeadFC = ({ pageContext }: any) => {
  const { getNodeByUrl } = useWeezipNotion();
  const node = notionNodeToJson(getNodeByUrl(pageContext.slug));
  const title = getPlainTextByRichText(node?.properties?.remark?.rich_text);
  const series = node?.properties?.series?.select?.name;
  const tagNames = node?.properties.tag?.multi_select?.map(t => t.name) || [];

  const imageBlock: ImageChildren = node?.children?.find(c => c.type === BlockType.IMAGE) as ImageChildren;
  const thumbnailUrl = imageBlock?.image
    ? `https://treefeely.notion.site/image/${encodeURIComponent(imageBlock.image?.file.url)}?table=block&id=${
        imageBlock.id
      }&cache=v2&width=1200`
    : '';

  const descriptions = [];
  descriptions.push('저자: Ethan');

  if (node?.properties?.created_date) {
    descriptions.push(`작성일: ${node?.properties?.created_date?.date.start}`);
  }
  if (node?.properties?.edited_date) {
    descriptions.push(`수정일: ${node?.properties?.edited_date?.date.start}`);
  }

  const getDescriptionText = (header2Name: '한줄평' | '머리말') => {
    const h2PrefaceIndex = node?.children?.findIndex(
      c => c.type === 'heading_2' && c.heading_2?.rich_text[0]?.plain_text === header2Name
    );

    if (0 <= h2PrefaceIndex && h2PrefaceIndex + 1 < node.children.length) {
      const h2Preface = node?.children[h2PrefaceIndex + 1];
      if (h2Preface?.type === BlockType.PARAGRAPH) {
        return `${header2Name}: ${h2Preface.paragraph.rich_text[0]?.plain_text}`;
      }
    } else {
      const firstParagraph = node?.children?.find(
        c => c.type === BlockType.PARAGRAPH && c.paragraph.rich_text.length > 0
      ) as ParagraphChildren;
      return `${firstParagraph?.paragraph?.rich_text[0]?.plain_text || ''}`;
    }
  };

  switch (series) {
    case '트리피디아':
      descriptions.push(getDescriptionText('한줄평'));
      break;
    default:
      descriptions.push(getDescriptionText('머리말'));
      break;
  }

  return (
    <SEO
      description={descriptions.join(', ')}
      keywords={[node?.properties?.series?.select?.name, ...tagNames]}
      pathname={pageContext.slug}
      thumbnail={thumbnailUrl}
      title={title}
    />
  );
};

const PostPage: React.FC<PageProps> = ({ pageContext }: any) => {
  const { slug } = pageContext;
  const { getNodeByUrl } = useWeezipNotion();
  const node = notionNodeToJson(getNodeByUrl(slug));
  const title = getPlainTextByRichText(node?.properties?.remark?.rich_text);
  const series = node?.properties?.series?.select;

  const breadcrumbSteps: BreadcrumbStep[] = [
    { name: '홈', url: '/' },
    { name: '글 목록', url: '/list' },
  ];
  if (series) {
    breadcrumbSteps.push({ name: `${series.name}`, url: getSeriesURL(series.name) });
  }

  return (
    <GlobalPortal.Provider>
      <MainLayout className="post">
        <Breadcrumb steps={breadcrumbSteps} />
        <article>
          <Title slug={slug} title={title} />
          <TitleDescription
            createdDate={node?.properties?.created_date}
            editedDate={node?.properties?.edited_date}
            tag={node?.properties?.tag?.multi_select}
            useTagLink
          />
          <LastEditedCaution lastEditedDate={new Date(node?.properties?.edited_date?.date?.start)} />
          <TableOfContents target={['h1', 'h2', 'h3']} />
          <Contents childrens={node?.children} />
        </article>
        <section className="post__footer">
          <Share />
          <Giscus />
          <OutLink series={series} />
          <Feedback />
        </section>
        <FloatBox useTop />
      </MainLayout>
    </GlobalPortal.Provider>
  );
};

export default PostPage;
