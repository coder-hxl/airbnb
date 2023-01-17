import React, { memo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

import {
  changeHeaderConfigAction,
  changeFooterConfigAction
} from '@/store/modules/main'
import { fetchUserInfoDataAction } from '@/store/modules/user'
import { fetchLoginInfoDataAction } from '@/store/modules/login'
import { yearTimeFormat } from '@/utils'
import localCache from '@/utils/cache'
import { BASE_URL } from '@/services/request/config'
import UserWrapper from './style'
import IconAvatar from '@/assets/svg/icon_avatar'

import type {
  RcFile,
  UploadChangeParam,
  UploadFile
} from 'antd/es/upload/interface'
import { RootState } from '@/store'
import { openFeedbackAction } from '@/store/modules/feedback'

const User = memo(() => {
  const { userId } = useParams()
  const dispatch = useDispatch<any>()
  const { userInfo, options } = useSelector((state: RootState) => ({
    userInfo: state.user.userInfo,
    options: state.user.options
  }))
  const headers = {
    Authorization: localCache.getCache('token')
  }

  useEffect(() => {
    dispatch(fetchUserInfoDataAction(userId ?? ''))
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
    dispatch(changeFooterConfigAction({ showFooter: false }))
  }, [userId])

  const beforeUpload = useCallback((file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      dispatch(
        openFeedbackAction({ type: 'error', content: '您只能上传JPG/PNG文件' })
      )
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      dispatch(
        openFeedbackAction({ type: 'error', content: '图像必须小于2MB!' })
      )
    }
    return isJpgOrPng && isLt2M
  }, [])

  const onChange = useCallback((info: UploadChangeParam<UploadFile<any>>) => {
    const { response } = info.file

    // 更新用户信息
    if (response?.code === 200) {
      dispatch(
        openFeedbackAction({ type: 'success', content: '更新图片成功~' })
      )
      dispatch(fetchUserInfoDataAction(userId ?? ''))
      dispatch(fetchLoginInfoDataAction(Number(userId)))
    }
  }, [])

  return (
    <UserWrapper>
      <div className="left">
        <div className="avatar-box">
          <div className="avatar">
            {userInfo.avatarUrl ? (
              <img src={userInfo.avatarUrl} alt="" />
            ) : (
              <IconAvatar />
            )}
          </div>
          {options.isOwner && (
            <ImgCrop>
              <Upload
                action={BASE_URL + '/upload/avatar'}
                name="avatar"
                headers={headers}
                maxCount={1}
                beforeUpload={beforeUpload}
                onChange={onChange}
              >
                <div className="update-avatar">更新照片</div>
              </Upload>
            </ImgCrop>
          )}
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
