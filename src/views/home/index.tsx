import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { fetchHomeDataAction } from '@/store/modules/home'
import {
  changeFooterConfigAction,
  changeHeaderConfigAction
} from '@/store/modules/main'
import { isEmptyO } from '@/utils/is-empty'
import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongFor from './c-cpns/home-long-for'
import HomeSectionV3 from './c-cpns/home-section-v3'

import {
  IHomeAreaV1,
  IHomeAreaV2,
  ILongForInfo
} from '@/store/modules/home/types'

const Home = memo(() => {
  // 获取state
  const {
    goodPriceInfo,
    highScoreInfo,
    hotPlaceInfo,
    wonderfulPlaceInfo,
    longForInfo,
    plusInfo
  } = useSelector(
    (state: RootState) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      hotPlaceInfo: state.home.hotPlaceInfo,
      wonderfulPlaceInfo: state.home.wonderfulPlaceInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  )

  // 派发action
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
    dispatch(changeFooterConfigAction({ showFooter: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!isEmptyO(wonderfulPlaceInfo) && (
          <HomeSectionV2 infoData={wonderfulPlaceInfo as IHomeAreaV1} />
        )}
        {!isEmptyO(hotPlaceInfo) && (
          <HomeSectionV2 infoData={hotPlaceInfo as IHomeAreaV1} />
        )}
        {!isEmptyO(longForInfo) && (
          <HomeLongFor infoData={longForInfo as ILongForInfo} />
        )}
        {!isEmptyO(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo as IHomeAreaV2} />
        )}
        {!isEmptyO(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo as IHomeAreaV2} />
        )}
        {!isEmptyO(plusInfo) && (
          <HomeSectionV3 infoData={plusInfo as IHomeAreaV2} />
        )}
      </div>
    </HomeWrapper>
  )
})

export default Home
