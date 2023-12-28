import * as React from 'react';
import { useEffect } from 'react';
import '@scss/components/PostIndexList.scss';
import useScroll from '@src/hooks/useScroll';

interface PostIndexListProps {
  list: HTMLHeadingElement[];
  useMoveTop?: boolean;
  useActive?: boolean;
}

const PostIndexList = ({ list, useMoveTop = false, useActive = false }: PostIndexListProps) => {
  const [activeIndexText, setActiveIndexText] = React.useState('');

  if (useActive) {
    const { scrollY } = useScroll();
    const offsetTopPositions = list.map(i => {
      return {
        offsetTop: i.offsetTop,
        name: i.outerText,
      };
    });

    useEffect(() => {
      setActiveIndexText(
        offsetTopPositions.find((item, i) => {
          const activeLine = item.offsetTop - 300;
          const nextOffsetTop = offsetTopPositions[i + 1]?.offsetTop;

          return nextOffsetTop ? activeLine < scrollY && scrollY < nextOffsetTop - 200 : activeLine < scrollY;
        })?.name || ''
      );
    }, [scrollY]);
  }

  const move = (item: HTMLHeadingElement) => {
    window.scrollTo({
      top: item.offsetTop,
      behavior: 'smooth',
    });
  };

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ol className={`block-header-index-list`}>
      {useMoveTop && (
        <li id={`index-top`} className="tag-top" onClick={moveTop}>
          맨위로
        </li>
      )}
      {list.map((item, i) => {
        const tag = item.tagName.toLowerCase();
        const text = item.outerText;
        return (
          <li
            id={`index-${text}`}
            className={`tag-${tag} ${activeIndexText === text ? 'active' : ''}`}
            key={`header-index-item-${i}`}
            onClick={() => move(item)}
          >
            {text}
          </li>
        );
      })}
    </ol>
  );
};

export default PostIndexList;
