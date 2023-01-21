import React, { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateUserInfoDataAction } from '@/store/modules/user'
import { yearTimeFormat } from '@/utils/time-format'
import formConfig from './config/form-config'
import Form from '@/base-ui/form'
import UserInfoWrapper from './style'

import IProps from './types'
import { IUserInfo } from '@/store/modules/user/types'
import { IUserUpdateData } from '@/services/modules/user'

const UserInfo = memo((props: IProps) => {
  const { userInfo, options } = props
  const dispatch = useDispatch<any>()
  const [isEditInfo, setIsEditInfo] = useState(false)

  const initFormData = formConfig.reduce((pre, value) => {
    const name = value.name as keyof IUserInfo
    return { ...pre, [name]: userInfo[name] }
  }, {}) as IUserUpdateData
  const [formData, setFormData] = useState(initFormData)

  const handleFormChange = useCallback((newForm: IUserInfo) => {
    setFormData(newForm)
  }, [])

  function handleFormSava() {
    const userId = userInfo.id
    dispatch(updateUserInfoDataAction({ userId, formData }))
    setIsEditInfo(false)
  }

  return (
    <UserInfoWrapper>
      <div className="title">您好，我叫{userInfo.name}</div>
      <div className="create-time">
        注册时间: {yearTimeFormat(userInfo.createAt)}
      </div>

      {options.isOwner && (
        <div className="edit-info">
          <div className="text" onClick={() => setIsEditInfo(true)}>
            编辑个人资料
          </div>
          {isEditInfo && (
            <div className="info-form">
              <Form
                formConfig={formConfig}
                formData={formData}
                onChange={handleFormChange}
              />

              <div className="btn">
                <div className="cancel" onClick={() => setIsEditInfo(false)}>
                  取消
                </div>
                <div className="save" onClick={handleFormSava}>
                  保存
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {!isEditInfo && (
        <div className="data">
          {userInfo.introduce && (
            <div className="introduce">
              <div className="title">介绍</div>
              <div className="content">{userInfo.introduce}</div>
            </div>
          )}
        </div>
      )}

      <div className="boundary"></div>
    </UserInfoWrapper>
  )
})

export default UserInfo
