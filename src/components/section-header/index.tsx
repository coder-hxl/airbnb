import React, { memo } from 'react'

import SectionHeaderWrapper from './style'

import { IProps } from './types'

const SectionHeader = memo((props: IProps) => {
  const { title, subTitle } = props

  return (
    <SectionHeaderWrapper>
      <h2 className="title">{title}</h2>
      {subTitle && <div className="subTitle">{subTitle}</div>}
    </SectionHeaderWrapper>
  )
})

export default SectionHeader
