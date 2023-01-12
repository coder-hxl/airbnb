import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeLoginConfigAction } from '@/store/modules/main'
import { fetchLoginDataAction } from '@/store/modules/user'
import getFormConfig from './config/form-config'
import LoginWrapper from './style'
import Form from '@/base-ui/form'
import IconClose from '@/assets/svg/icon_close'

import { RootState } from '@/store'
import { IAnyObject } from '@/types/common'
import { IFormConfig } from './types'

const AppLogin = memo(() => {
  const { type } = useSelector(
    (state: RootState) => ({
      type: state.main.loginConfig.type
    }),
    shallowEqual
  )
  const [formData, setFormData] = useState<IAnyObject>({})
  const dispatch = useDispatch<any>()
  const [formConfig, setFormConfig] = useState<IFormConfig>([] as IFormConfig)

  useEffect(() => {
    const overflowValue = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflowValue
    }
  }, [])

  useEffect(() => {
    const newFormConifg = getFormConfig(type)

    setFormConfig(newFormConifg)
  }, [type])

  function handleCloseBtnClick() {
    dispatch(changeLoginConfigAction({ showLogin: false, type: 'signUp' }))
  }

  function handleTypeSwitchClick() {
    const newType = type === 'signUp' ? 'signIn' : 'signUp'
    dispatch(changeLoginConfigAction({ showLogin: true, type: newType }))
  }

  function handleLoginBtnClick(type: 'signUp' | 'signIn') {
    dispatch(fetchLoginDataAction({ type, formData }))
  }

  const handleFormChange = useCallback((value: IAnyObject) => {
    setFormData(value)
  }, [])

  return (
    <LoginWrapper>
      <div className="content">
        <div className="close">
          <span className="btn" onClick={handleCloseBtnClick}>
            <IconClose height="1.4" width="1.4" color="#767676" />
          </span>
        </div>

        <div className="title">
          <div className="main-title">
            {type === 'signUp' ? '登录' : '注册'}爱彼迎
          </div>
          <div className="sub-title">
            {type === 'signUp' ? '没有' : '已有'}账号?
            <span className="type-switch" onClick={handleTypeSwitchClick}>
              立即{type === 'signUp' ? '注册' : '登录'}
            </span>
          </div>
        </div>
        <div className="forms">
          <Form formConfig={formConfig} onChange={handleFormChange} />

          {type === 'signUp' && (
            <div className="forget-password">
              <span>忘记密码?</span>
            </div>
          )}

          <button
            className="login-btn"
            onClick={() => handleLoginBtnClick(type)}
          >
            立即{type === 'signUp' ? '登录' : '注册'}
          </button>
        </div>
      </div>

      <div className="cover"></div>
    </LoginWrapper>
  )
})

export default AppLogin
