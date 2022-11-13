import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyO } from '@/utils'

import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'

const Home = memo(() => {
  // 获取state
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendDestInfo } =
    useSelector(
      (state: RootState) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        hotRecommendDestInfo: state.home.hotRecommendDestInfo,
      }),
      shallowEqual
    )

  // 派发action
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(hotRecommendDestInfo) && (
          <HomeSectionV2 infoData={hotRecommendDestInfo} />
        )}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}

        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
