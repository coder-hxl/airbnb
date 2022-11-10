import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { RootState } from '@/store'

import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  const { goodPrice } = useSelector(
    (state: RootState) => ({
      goodPrice: state.home.goodPrice,
    }),
    shallowEqual
  )

  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="goodPrice">
        <SectionHeader title={goodPrice.title ?? ''} />
        <SectionRooms roomList={goodPrice.list ?? []} />
      </div>
    </HomeWrapper>
  )
})

export default Home
