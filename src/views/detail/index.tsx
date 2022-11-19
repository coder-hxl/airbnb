import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import DetailWrapper from './style'

import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'

import { RootState } from '@/store'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state: RootState) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures pictures={detailInfo?.picture_urls ?? []} />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail
