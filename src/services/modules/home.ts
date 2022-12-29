import xLRequest from '..'

import {
  IHomeAreaV1,
  IHomeAreaV2,
  ILongForInfo,
} from '@/store/modules/home/types'

export function getHomeGoodPriceData() {
  return xLRequest.get<IHomeAreaV2>({ url: '/home/goodprice' })
}

export function getHomeHighScoreData() {
  return xLRequest.get<IHomeAreaV2>({ url: '/home/highscore' })
}

export function getHotPlaceData() {
  return xLRequest.get<IHomeAreaV1>({ url: '/home/hotplace' })
}

export function getWonderfulPlaceData() {
  return xLRequest.get<IHomeAreaV1>({ url: '/home/wonderfulplace' })
}

export function getLongForData() {
  return xLRequest.get<ILongForInfo>({ url: '/home/longfor' })
}

export function getPlusData() {
  return xLRequest.get<IHomeAreaV2>({ url: '/home/plus' })
}
