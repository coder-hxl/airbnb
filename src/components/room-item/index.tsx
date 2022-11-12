import React, { memo } from 'react'
import { Rating } from '@mui/material'

import RoomItemWrapper from './style'

import { IProps } from './types'

const RoomItem = memo((props: IProps) => {
  const { itemData, itemWidth } = props

  return (
    <RoomItemWrapper color={itemData.star_rating_color} itemWidth={itemWidth}>
      <div className="cover">
        <img className="picture" src={itemData.picture_url} alt="图片" />
      </div>
      <div className="i-content">
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name" title={itemData.name}>
          {itemData.name}
        </div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="evaluate">
          <Rating
            value={itemData.star_rating ?? 0}
            readOnly
            precision={0.1}
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
