import React from 'react';

import './Deprecated.scss';

const Deprecated = () => {
  return (
    <section className="deprecated">
      <div className="deprecated__content">
        <p>이 블로그는 더 이상 관리되지 않습니다.</p>
        <p>
          이후 글들은 <a href="https://treefeely.com">여기</a>서 보실 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default Deprecated;
