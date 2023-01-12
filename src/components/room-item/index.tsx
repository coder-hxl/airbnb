import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rating } from '@mui/material'
import classNames from 'classnames'

import RoomItemWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

import type { IProps } from './types'

const RoomItem = memo((props: IProps) => {
  const { itemData, itemWidth } = props
  const navigate = useNavigate()

  const [selectIndex, setSelectIndex] = useState(0)

  function controlClickHandle(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isNext = true
  ) {
    event.stopPropagation()

    const length = itemData.pictureUrls?.length
    if (length !== undefined) {
      let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
      if (newIndex < 0) newIndex = length - 1
      if (newIndex > length - 1) newIndex = 0
      setSelectIndex(newIndex)
    }
  }

  function ItemClickHandle() {
    const { id } = itemData
    navigate(`/room/${id}`)
  }

  const pictureEl = (
    <div className="container">
      <img className="picture" src={itemData.coverUrl} alt="" />
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
          {itemData.pictureUrls?.map((item, index) => {
            return (
              <div key={item} className={classNames('item')}>
                <div
                  className={classNames('dot', {
                    active: selectIndex === index
                  })}
                ></div>
              </div>
            )
          })}
        </Indicator>
      </div>

      <div className="container">
        <img
          className="picture"
          src={itemData.pictureUrls?.[selectIndex]}
          alt=""
        />
      </div>
    </div>
  )

  return (
    <RoomItemWrapper
      color="#008489"
      itemWidth={itemWidth}
      onClick={ItemClickHandle}
    >
      {!itemData.pictureUrls ? pictureEl : sliderEl}

      <div className="i-content">
        <div className="type">
          {[itemData.type, ...itemData.bedTypes].join(' · ')}
        </div>
        <div className="name" title={itemData.name}>
          {itemData.name}
        </div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="evaluate">
          <Rating
            value={itemData.starRating ?? 0}
            readOnly
            precision={0.1}
            sx={{ fontSize: '13px' }}
          />
          <div className="message">
            {itemData.reviewsCount}
            {itemData.scoreDesc && ' · ' + itemData.scoreDesc}
          </div>
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem
