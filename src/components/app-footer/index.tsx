import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import footer from '@/assets/data/footer.json'

import FooterWrapper from './style'
import { RootState } from '@/store'

const AppFooter = memo(() => {
  const { showFooter } = useSelector((state: RootState) => ({
    showFooter: state.main.footerConfig.showFooter
  }))

  return showFooter ? (
    <FooterWrapper>
      <div className="content">
        <div className="desc">
          {footer.map((item) => {
            return (
              <div key={item.name} className="item">
                <div className="title">{item.name}</div>
                <ul>
                  {item.list.map((cItem) => {
                    return <li key={cItem}>{cItem}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <p className="text">
          © 2022 Airbnb, Inc. All rights reserved. 条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </p>
      </div>
    </FooterWrapper>
  ) : null
})

export default AppFooter
