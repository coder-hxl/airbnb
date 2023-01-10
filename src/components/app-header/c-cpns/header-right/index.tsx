import React, { memo, useEffect, useState, MouseEvent } from 'react'

import RightWrapper from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoginConfigAction } from '@/store/modules/main'
import { RootState } from '@/store'

const Right = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  const { token } = useSelector((state: RootState) => ({
    token: state.user.token
  }))
  const userIsLogin = token === ''

  const dispatch = useDispatch<any>()

  useEffect(() => {
    function windowClick() {
      setShowPanel(false)
    }

    window.addEventListener('click', windowClick)

    return () => {
      window.removeEventListener('click', windowClick)
    }
  }, [])

  function handleProfileClick(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    setShowPanel(!showPanel)
  }

  function handleLoginBtnClick(type: 'signUp' | 'signIn') {
    dispatch(changeLoginConfigAction({ showLogin: true, type }))
  }

  return (
    <RightWrapper>
      <div className="btns">
        {userIsLogin && (
          <>
            <span className="btn" onClick={() => handleLoginBtnClick('signUp')}>
              登录
            </span>
            <span className="btn" onClick={() => handleLoginBtnClick('signIn')}>
              注册
            </span>
          </>
        )}

        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={handleProfileClick}>
        <div className="icons">
          <IconMenu />
          <IconAvatar />
        </div>

        {showPanel && (
          <div className="panel">
            {userIsLogin ? (
              <>
                <div
                  className="item"
                  onClick={() => handleLoginBtnClick('signUp')}
                >
                  登录
                </div>
                <div
                  className="item"
                  onClick={() => handleLoginBtnClick('signIn')}
                >
                  注册
                </div>
              </>
            ) : (
              <div className="item">账号</div>
            )}

            <div className="partition"></div>

            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default Right
