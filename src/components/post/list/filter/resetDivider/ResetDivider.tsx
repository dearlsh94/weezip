import * as React from 'react';

import './ResetDivider.scss';
import { IconClearAll } from '@components/icon';
import { Divider } from '@components/ui';
import { ARIA_LABEL } from '@src/constants';
import { moveToPostsPage } from '@utils/url';

export default function ResetDivider() {
  return (
    <div className="reset-divider">
      <Divider color="primary" height={2} />
      <span aria-label={`글 목록 페이지로 ${ARIA_LABEL.MOVE}`} className="reset" onClick={() => moveToPostsPage({})}>
        <IconClearAll />
        초기화
      </span>
    </div>
  );
}
