import Linker from '@components/ui/Linker';
import MyButton, { ButtonColor, ButtonSize, ButtonType } from '@components/ui/MyButton';
import { Select } from '@types';
import React from 'react';
import './index.scss';
interface OutLinkProps {
  series?: Select;
}
export default function OutLink({ series }: OutLinkProps) {
  return (
    <div className="out-link-box">
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
  );
}
