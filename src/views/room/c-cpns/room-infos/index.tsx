import React, { memo } from 'react'
import { Rating } from '@mui/material'

import RoomInfosWrapper from './style'

import { IProps } from './types'

const RoomInfos = memo((props: IProps) => {
  const { itemData } = props

  return (
    <RoomInfosWrapper>
      <div className="room-detail area">
        <div className="introduce">
          {itemData.areaName} · {itemData.type}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="bed-type">{itemData.bedTypes?.join(' · ')}</div>
        <span className="star-info">
          {itemData.starRating}分 · {itemData.reviewsCount}条评论
        </span>
      </div>

      <div className="landlord-detail area">
        <div className="landlord">
          <div className="avatar">
            <img
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              alt=""
            />
          </div>
          <div className="name">房东: {itemData.landlord?.name}</div>
        </div>
        <div className="introduction">
          <span className="triangle"></span>
          <div className="text">{itemData.introduction}</div>
        </div>
      </div>

      <div className="reviews-container">
        <div className="header area">
          <div className="title">评价</div>
          <div className="star">
            <Rating
              value={itemData.starRating ?? 0}
              readOnly
              precision={0.1}
              sx={{ fontSize: '20px' }}
            />
            <div className="reviews-count">{itemData.reviewsCount}条评论</div>
          </div>
        </div>
        <div className="reviews">
          {itemData.reviews?.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="user-info">
                  <div className="avatar">
                    <img
                      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                      alt=""
                    />
                  </div>
                  <div className="user">
                    <div className="name">{item.user.name}</div>
                    <div className="create-at">{item.createAt}</div>
                  </div>
                </div>
                <div className="star">
                  <Rating
                    value={item.star_rating ?? 0}
                    readOnly
                    precision={0.1}
                    sx={{ fontSize: '16px' }}
                  />
                </div>
                <div className="comment">{item.comment}</div>
              </div>
            )
          })}
        </div>
      </div>
    </RoomInfosWrapper>
  )
})

export default RoomInfos
