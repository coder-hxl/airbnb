import React, { memo, useEffect, useRef } from 'react'

import IndicatorWrapper from './style'

import { IProps } from './types'

const Indicator = memo((props: IProps) => {
  const { children, selectIndex } = props

  const contentRef = useRef<HTMLDivElement>({} as HTMLDivElement)

  useEffect(() => {}, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator
