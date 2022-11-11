import React, { memo } from 'react'
import { Rating } from '@mui/material'

import RoomItemWrapper from './style'

import { IProps } from './types'

const RoomItem = memo((props: IProps) => {
  const { itemData } = props

  return (
    <RoomItemWrapper>
      <div className="cover">
        <img className="picture" src={itemData.picture_url} alt="图片" />
      </div>
      <div className="content">
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name" title={itemData.name}>
          {itemData.name}
        </div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="evaluate">
          <Rating
            value={itemData.star_rating ?? 0}
            readOnly
            sx={{ fontSize: '13px' }}
          />
          <div className="message">
            {itemData.reviews_count}
            {itemData.bottom_info && ' · ' + itemData.bottom_info?.content}
          </div>
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem
