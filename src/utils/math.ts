/**
 * min 이상 max 이하 랜덤한 정수를 구한다.
 * @param min 최소값
 * @param max 최대값
 * @returns 랜덤 정수
 */
export const getRandomInt = (min = 0, max = 0) => {
  if (min > max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * min 이상 max 이하 랜덤한 숫자의 소숫점 n자리수까지 구한다.
 * @param min 최소값
 * @param max 최대값
 * @param fixed 소숫점 자릿수
 * @returns 랜덤한 소수
 */
export const getRandomFloat = (min = 0.0, max = 1.0, fixed = 1) => {
  if (min > max) {
    return max;
  }
  return parseFloat((Math.random() * (max - min) + min).toFixed(fixed));
};
