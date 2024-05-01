import { useEffect, useState } from 'react';

import { fetchAllVisitorsCount, fetchTodayVisitorsCount } from '@src/services/visitors';

export const useVisitor = () => {
  const [allVisitors, setAllVisitors] = useState<number | null>(null);
  const [todayVisitors, setTodayVisitors] = useState<number | null>(null);

  async function loadAllVisitors() {
    const allVisitorsCount = await fetchAllVisitorsCount();
    if (allVisitorsCount) {
      // GA를 통해 이전 방문자 수 체크해서 소급
      // 435 : GA 변경 전 2024.01.01 ~ 2024.02.10
      // 752 : GA 변경 전 2023.04.01 ~ 2023.12.31
      // 1787 : GA 변경 후 2023.04.30 ~ 2024.04.30
      setAllVisitors(allVisitorsCount + 435 + 752 + 1787);
    }
  }

  async function loadTodayVisitors() {
    const todayVisitorsCount = await fetchTodayVisitorsCount();
    if (todayVisitorsCount) {
      setTodayVisitors(todayVisitorsCount);
    }
  }

  useEffect(() => {
    loadAllVisitors();
    loadTodayVisitors();
  }, []);

  return {
    allVisitors,
    todayVisitors,
  };
};
