import xLRequest from '..'

export function getHomeGoodPriceData() {
  return xLRequest.get({ url: '/home/goodprice' })
}
