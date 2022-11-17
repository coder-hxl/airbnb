import React, { memo } from 'react'

import DetailPicturesWrapper from './style'

import { IDetailPictureProps } from './types'

const DetailPictures = memo((props: IDetailPictureProps) => {
  const { pictures } = props

  return (
    <DetailPicturesWrapper>
      <div className="left">
        <div className="item">
          <img src={pictures[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {pictures.slice(1, 5).map((item) => {
          return (
            <div className="item" key={item}>
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          )
        })}
      </div>
    </DetailPicturesWrapper>
  )
})

export default DetailPictures
