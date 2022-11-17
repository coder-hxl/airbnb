import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/lib/carousel'

import RoomItemWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

import type { IProps } from './types'
import classNames from 'classnames'

const RoomItem = memo((props: IProps) => {
  const { itemData, itemWidth, itemClick } = props

  const [selectIndex, setSelectIndex] = useState(0)
  const carouselRef = useRef<CarouselRef>({} as CarouselRef)

  function controlClickHandle(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isNext = true
  ) {
    event.stopPropagation()
    isNext ? carouselRef.current.next() : carouselRef.current.prev()

    const length = itemData.picture_urls?.length
    if (length !== undefined) {
      let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
      if (newIndex < 0) newIndex = length - 1
      if (newIndex > length - 1) newIndex = 0
      setSelectIndex(newIndex)
    }
  }

  function ItemClickHandle() {
    if (itemClick) itemClick()
  }

  const pictureEl = (
    <div className="cover">
      <img className="picture" src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderEl = (
    <div className="slider">
      <div className="controller">
        <div
          className="btn left"
          onClick={(event) => controlClickHandle(event, false)}
        >
          <IconArrowLeft width="26px" height="26px" />
        </div>
        <div
          className="btn right"
          onClick={(event) => controlClickHandle(event)}
        >
          <IconArrowRight width="26px" height="26px" />
        </div>
      </div>

      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div key={item} className={classNames('item')}>
                <div
                  className={classNames('dot', {
                    active: selectIndex === index,
                  })}
                ></div>
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
  )

  return (
    <RoomItemWrapper
      color={itemData.star_rating_color}
      itemWidth={itemWidth}
      onClick={ItemClickHandle}
    >
      {!itemData.picture_urls ? pictureEl : sliderEl}

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
