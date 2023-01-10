import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { isEmptyO } from '@/utils'

import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongFor from './c-cpns/home-long-for'
import HomeSectionV3 from './c-cpns/home-section-v3'

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
    dispatch(
      changeHeaderConfigAction({
        isFixed: true,
        topAlpha: true
      })
    )
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(wonderfulPlaceInfo) && (
          <HomeSectionV2 infoData={wonderfulPlaceInfo} />
        )}
        {isEmptyO(hotPlaceInfo) && <HomeSectionV2 infoData={hotPlaceInfo} />}
        {isEmptyO(longForInfo) && <HomeLongFor infoData={longForInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
