export const getLocationQuery = (search = '') => {
  let params = search.replace('?', '').split('&')
  let res: { [key: string]: any } = {}
  params.forEach(p => {
    let keyValue = p.split('=')
    const key = keyValue[0]
    const value = keyValue[1]

    // 중복 key가 있으면 배열로 저장
    if (res[key]) {
      if (Array.isArray(res[key])) {
        res[key].push(value)
      } else {
        res[key] = [res[key], value]
      }
    } else {
      res[key] = value
    }
  })
  return res
}
