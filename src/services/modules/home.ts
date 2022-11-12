import xLRequest from '..'

import {
  IDiscountInfo,
  IGoodPriceInfo,
  IHighScoreInfo,
} from '@/store/modules/home/types'

export function getHomeGoodPriceData() {
  return xLRequest.get<IGoodPriceInfo>({ url: '/home/goodprice' })
}

export function getHomeHighScoreData() {
  return xLRequest.get<IHighScoreInfo>({ url: '/home/highscore' })
}

export function getDiscountData() {
  return xLRequest.get<IDiscountInfo>({ url: '/home/discount' })
}
