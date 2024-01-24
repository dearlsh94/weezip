import React from 'react';

import './OutLink.scss';
import { MyButton } from '@components/ui';
import { ButtonColor, ButtonSize, ButtonType } from '@components/ui/button/MyButton';
import { Linker } from '@components/ui/linker';

import { Select } from '@types';
interface OutLinkProps {
  series?: Select;
}
export default function OutLink({ series }: OutLinkProps) {
  return (
    <div className="out-link-box">
      {series && (
        <Linker aria-label={`${series.name} 시리즈 목록으로 이동`} url={`/list?series=${series.name}`}>
          <MyButton
            className="series-button"
            color={ButtonColor.PRIMARY}
            size={ButtonSize.PRIMARY}
            type={ButtonType.BORDER}
            width={'100%'}
          >
            <span>{series.name}</span>
            시리즈 전체보기
          </MyButton>
        </Linker>
      )}
      <Linker aria-label="전체 목록 보기" url={`/list`}>
        <MyButton color={ButtonColor.PRIMARY} size={ButtonSize.PRIMARY} type={ButtonType.BORDER} width={'100%'}>
          포스트 전체보기
        </MyButton>
      </Linker>
    </div>
  );
}
