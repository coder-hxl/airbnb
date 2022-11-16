import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/lib/carousel'

import RoomItemWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

import type { IProps } from './types'

const RoomItem = memo((props: IProps) => {
  const { itemData, itemWidth } = props

  const [selectIndex, setSelectIndex] = useState(0)
  const carouselRef = useRef<CarouselRef>({} as CarouselRef)

  function controlClickHandle(isNext = true) {
    isNext ? carouselRef.current.next() : carouselRef.current.prev()

    const length = itemData.picture_urls?.length
    if (length !== undefined) {
      let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
      if (newIndex < 0) newIndex = length - 1
      if (newIndex > length - 1) newIndex = 0
      setSelectIndex(newIndex)
    }
  }

  return (
    <RoomItemWrapper color={itemData.star_rating_color} itemWidth={itemWidth}>
      {/* <div className="cover">
        <img className="picture" src={itemData.picture_url} alt="" />
      </div> */}

      <div className="slider">
        <div className="controller">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="26px" height="26px" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle()}>
            <IconArrowRight width="26px" height="26px" />
          </div>
        </div>

        <div className="indicator">
          <Indicator selectIndex={selectIndex}>
            {itemData.picture_urls?.slice(0, 8).map((item, index) => {
              return (
                <div key={item} className="item">
                  {index}
                </div>
              )
            })}
          </Indicator>
        </div>

        <Carousel ref={carouselRef} dots={false}>
          {itemData.picture_urls?.map((item) => {
            return (
              <div key={item} className="cover">
                <img className="picture" src={item} alt="" />
              </div>
            )
          })}
        </Carousel>
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
