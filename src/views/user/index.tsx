import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  changeHeaderConfigAction,
  changeFooterConfigAction
} from '@/store/modules/main'
import { fetchUserInfoDataAction } from '@/store/modules/user'
import { isEmptyO } from '@/utils/is-empty'
import UserWrapper from './style'
import UserVerify from './c-cpns/user-verify'
import UserInfo from './c-cpns/user-info'

import { RootState } from '@/store'
import { IUserInfo, IUserOptions } from '@/store/modules/user/types'

const User = memo(() => {
  const { userId } = useParams() as { userId: string }
  const dispatch = useDispatch<any>()
  const { userInfo, options } = useSelector((state: RootState) => ({
    userInfo: state.user.userInfo,
    options: state.user.options
  }))

  useEffect(() => {
    dispatch(fetchUserInfoDataAction(userId))
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
    dispatch(changeFooterConfigAction({ showFooter: false }))
  }, [userId])

  return (
    <UserWrapper>
      {!isEmptyO(userInfo) && (
        <>
          <UserVerify
            userInfo={userInfo as IUserInfo}
            options={options as IUserOptions}
          />
          <UserInfo
            userInfo={userInfo as IUserInfo}
            options={options as IUserOptions}
          />
        </>
      )}
    </UserWrapper>
  )
})

export default User
