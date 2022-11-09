import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeWrapper from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import { RootState } from '@/store'

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
      <h2>{goodPrice.title}</h2>
    </HomeWrapper>
  )
})

export default Home
