import xLRequest from '..'

import {
  IGoodPriceInfo,
  IHighScoreInfo,
  IHomeArea,
  ILongForInfo,
  IPlusInfo,
} from '@/store/modules/home/types'

export function getHomeGoodPriceData() {
  return xLRequest.get<IGoodPriceInfo>({ url: '/home/goodprice' })
}

export function getHomeHighScoreData() {
  return xLRequest.get<IHighScoreInfo>({ url: '/home/highscore' })
}

export function getHotPlaceData() {
  return xLRequest.get<IHomeArea>({ url: '/home/hotplace' })
}

export function getWonderfulPlaceData() {
  return xLRequest.get<IHomeArea>({ url: '/home/wonderfulplace' })
}

export function getLongForData() {
  return xLRequest.get<ILongForInfo>({ url: '/home/longfor' })
}

export function getPlusData() {
  return xLRequest.get<IPlusInfo>({ url: '/home/plus' })
}
