import React, { memo, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Rating, Pagination } from '@mui/material'

import { fetchReviewDataAction } from '@/store/modules/room'
import { fullTimeFormat } from '@/utils/time-format'
import RoomInfosWrapper from './style'
import IconAvatar from '@/assets/svg/icon_avatar'

import { IProps } from './types'

const RoomInfos = memo((props: IProps) => {
  const { itemData, review } = props

  const reviewListRef = useRef<HTMLDivElement>({} as HTMLDivElement)
  const pageCount = Math.ceil((review.reviewCount ?? 0) / 8)

  const dispatch = useDispatch<any>()
  const paginationChangeHandle = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      const roomId = Number(itemData.id)
      const offset = (page - 1) * 8
      const scrollTop = reviewListRef.current.offsetTop

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      })
      dispatch(fetchReviewDataAction({ roomId, offset }))
    },
    [dispatch, itemData.id]
  )

  return (
    <RoomInfosWrapper>
      <div className="detail">
        <div className="room area">
          <div className="introduce">
            {itemData.areaName} · {itemData.type}
          </div>
          <div className="name">{itemData.name}</div>
          <div className="address">{itemData.address}</div>
          <div className="bed-type">{itemData.bedTypes?.join(' · ')}</div>
          <span className="star-info">
            {review.starRating}分 · {review.reviewCount}条评论
          </span>
        </div>

        <div className="landlord area">
          <div className="landlord">
            <div className="avatar">
              {itemData.landlord?.avatarUrl ? (
                <img src={itemData.landlord?.avatarUrl} alt="" />
              ) : (
                <IconAvatar />
              )}
            </div>
            <div className="name">房东: {itemData.landlord?.name}</div>
          </div>
          <div className="introduction">
            <span className="triangle"></span>
            <div className="text">{itemData.introduction}</div>
          </div>
        </div>
      </div>

      <div className="review">
        <div className="header area">
          <div className="title">评价</div>
          <div className="star">
            <Rating
              value={review.starRating ?? 0}
              readOnly
              precision={0.1}
              sx={{ fontSize: '20px' }}
            />
            <div className="reviews-count">{review.reviewCount}条评论</div>
          </div>
        </div>
        <div className="list" ref={reviewListRef}>
          {review.list?.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="user-info">
                  <div className="avatar">
                    {item.user.avatarUrl ? (
                      <img src={item.user.avatarUrl} alt="" />
                    ) : (
                      <IconAvatar />
                    )}
                  </div>
                  <div className="user">
                    <div className="name">{item.user.name}</div>
                    <div className="create-at">
                      {fullTimeFormat(item.createAt)}
                    </div>
                  </div>
                </div>
                <div className="star">
                  <Rating
                    value={item.starRating ?? 0}
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
        <div className="pagination">
          {pageCount > 0 && (
            <Pagination count={pageCount} onChange={paginationChangeHandle} />
          )}
        </div>
      </div>
    </RoomInfosWrapper>
  )
})

export default RoomInfos
