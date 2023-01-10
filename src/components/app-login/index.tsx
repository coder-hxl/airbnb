import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import getInputConfig from './config/input-config'
import { changeLoginConfigAction } from '@/store/modules/main'
import LoginWrapper from './style'

import { RootState } from '@/store'
import Form from '@/base-ui/form'
import { IAnyObject } from '@/types/common'
import { fetchUserStateDataAction } from '@/store/modules/user'

const AppLogin = memo(() => {
  const { type } = useSelector((state: RootState) => ({
    type: state.main.loginConfig.type
  }))
  const [formData, setFormData] = useState<IAnyObject>({})
  const dispatch = useDispatch<any>()
  const inputConfig = getInputConfig(type)

  useEffect(() => {
    const overflowValue = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflowValue
    }
  }, [])

  function handleTypeSwitchClick() {
    const newType = type === 'signUp' ? 'signIn' : 'signUp'
    dispatch(changeLoginConfigAction({ showLogin: true, type: newType }))
  }

  function handleLoginBtnClick(type: 'signUp' | 'signIn') {
    dispatch(fetchUserStateDataAction({ type, formData }))
  }

  const handleFormChange = useCallback((value: IAnyObject) => {
    setFormData(value)
  }, [])

  return (
    <LoginWrapper>
      <div className="content">
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
          <Form formConfig={inputConfig} onChange={handleFormChange} />

          {type === 'signUp' && (
            <div className="forget-password">忘记密码?</div>
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
