import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import DetailWrapper from './style'

import DetailPictures from './c-cpns/detail-pictures'

import { RootState } from '@/store'

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state: RootState) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  )

  return (
    <DetailWrapper>
      <DetailPictures pictures={detailInfo?.picture_urls ?? []} />
    </DetailWrapper>
  )
})

export default Detail
