import xLRequest from '..'

import {
  IDiscountInfo,
  IGoodPriceInfo,
  IHighScoreInfo,
  IHotRecommendDestInfo,
  ILongForInfo,
  IPlusInfo,
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

export function getHotRecommendDestData() {
  return xLRequest.get<IHotRecommendDestInfo>({ url: '/home/hotrecommenddest' })
}

export function getLongForData() {
  return xLRequest.get<ILongForInfo>({ url: '/home/longfor' })
}

export function getPlusData() {
  return xLRequest.get<IPlusInfo>({ url: '/home/plus' })
}
