import React, { memo } from 'react'
import UserInfoWrapper from './style'

import { yearTimeFormat } from '@/utils/time-format'

import IProps from './types'

const UserInfo = memo((props: IProps) => {
  const { userInfo, options } = props

  return (
    <UserInfoWrapper>
      <div className="info">
        <div className="title">您好，我叫{userInfo.name}</div>
        <div className="create-time">
          注册时间: {yearTimeFormat(userInfo.createAt)}
        </div>
        <div className="introduce">{userInfo.introduce}</div>
        {options.isOwner && <div className="change-info">编辑个人资料</div>}
      </div>
    </UserInfoWrapper>
  )
})

export default UserInfo
