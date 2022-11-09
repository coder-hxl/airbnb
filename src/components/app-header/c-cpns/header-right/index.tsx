import React, { memo, useEffect, useState, MouseEvent } from 'react'

import RightWrapper from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const Right = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

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

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
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
            <div className="item">注册</div>
            <div className="item">登录</div>

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
