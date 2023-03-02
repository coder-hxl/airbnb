import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

import { fetchLoginUserInfoDataAction } from '@/store/modules/login'
import { fetchUserInfoDataAction } from '@/store/modules/user'
import { openFeedbackAction } from '@/store/modules/feedback'
import localCache from '@/utils/cache'
import { BASE_URL } from '@/services/request/config'
import UserVerifyWrapper from './style'
import IconAvatar from '@/assets/svg/icon_avatar'

import type {
  RcFile,
  UploadChangeParam,
  UploadFile
} from 'antd/es/upload/interface'
import IProps from './types'

const UserVerify = memo((props: IProps) => {
  const { userInfo, options } = props
  const dispatch = useDispatch<any>()
  const headers = {
    Authorization: localCache.getCache('token')
  }

  const handleBeforeUpload = useCallback((file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      dispatch(
        openFeedbackAction({
          type: 'error',
          content: '您只能上传JPG/PNG文件'
        })
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

  const handleUploadChange = useCallback(
    (info: UploadChangeParam<UploadFile<any>>) => {
      const { response } = info.file

      // 更新用户信息
      if (response?.code === 200) {
        dispatch(
          openFeedbackAction({ type: 'success', content: '更新图片成功~' })
        )
        dispatch(fetchUserInfoDataAction(userInfo.id))
        dispatch(fetchLoginUserInfoDataAction(Number(userInfo.id)))
      }
    },
    []
  )

  return (
    <UserVerifyWrapper>
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
              beforeUpload={handleBeforeUpload}
              onChange={handleUploadChange}
            >
              <div className="update-avatar">更新照片</div>
            </Upload>
          </ImgCrop>
        )}

        <div className="boundary"></div>

        <div className="verify">
          <div className="title">{userInfo.name}已确认</div>
        </div>
      </div>
    </UserVerifyWrapper>
  )
})

export default UserVerify
