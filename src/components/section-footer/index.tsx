import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import SectionFooterWrapper from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

import { IProps } from './types'

const SectionFooter = memo((props: IProps) => {
  const { name, areaName, type } = props

  const navigate = useNavigate()
  const footerName = name ? `查看更多${name}房源` : '显示全部'

  function footerClickHandle() {
    navigate(`/area/${areaName}?type=${type}`)
  }

  return (
    <SectionFooterWrapper
      color={name ? '#00848A' : '#000'}
      onClick={footerClickHandle}
    >
      <div className="info">
        <div className="name">{footerName}</div>
        <IconArrowRight />
      </div>
    </SectionFooterWrapper>
  )
})

export default SectionFooter
