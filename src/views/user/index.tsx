import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  changeHeaderConfigAction,
  changeFooterConfigAction
} from '@/store/modules/main'
import { fetchUserInfoDataAction } from '@/store/modules/user'
import { yearTimeFormat } from '@/utils'
import UserWrapper from './style'
import IconAvatar from '@/assets/svg/icon_avatar'

import { RootState } from '@/store'

const User = memo(() => {
  const { userId } = useParams()
  const dispatch = useDispatch<any>()
  const { userInfo, options } = useSelector((state: RootState) => ({
    userInfo: state.user.userInfo,
    options: state.user.options
  }))

  useEffect(() => {
    dispatch(fetchUserInfoDataAction(userId ?? ''))
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
    dispatch(changeFooterConfigAction({ showFooter: false }))
  }, [userId])

  return (
    <UserWrapper>
      <div className="left">
        <div className="avatar-box">
          <div className="avatar">
            {' '}
            {userInfo.avatarUrl ? (
              <img src={userInfo.avatarUrl} alt="" />
            ) : (
              <IconAvatar />
            )}
          </div>
          {options.isOwner && <div className="update-avatar">更新照片</div>}
        </div>

        <div className="boundary"></div>

        <div className="verify">
          <div className="title">{userInfo.name}已确认</div>
        </div>
      </div>

      <div className="right">
        <div className="info">
          <div className="title">您好，我叫{userInfo.name}</div>
          <div className="create-time">
            注册时间: {yearTimeFormat(userInfo.createAt)}
          </div>
          <div className="introduce">{userInfo.introduce}</div>
          {options.isOwner && <div className="change-info">编辑个人资料</div>}
        </div>
      </div>
    </UserWrapper>
  )
})

export default User
