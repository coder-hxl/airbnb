import React, { memo, useEffect, useRef, useState } from 'react'

import IndicatorWrapper from './style'

import { IProps } from './types'

const Indicator = memo((props: IProps) => {
  const { children, selectIndex, center = true } = props

  const [isCenter, setIsCenter] = useState(center)
  const contentRef = useRef<HTMLDivElement>({} as HTMLDivElement)

  useEffect(() => {
    if (center) {
      const contentClientWidth = contentRef.current.clientWidth
      const contentScrollWidth = contentRef.current.scrollWidth
      const isCenter = contentClientWidth === contentScrollWidth
      setIsCenter(isCenter)
    }
  }, [center])

  useEffect(() => {
    const contentClientWidth = contentRef.current.clientWidth
    const contentScrollWidth = contentRef.current.scrollWidth

    const selectEl = contentRef.current.children[
      selectIndex
    ] as unknown as HTMLElement
    const selectClientWidth = selectEl.clientWidth
    const selectOffsetLeft = selectEl.offsetLeft

    // 获取滚动距离
    let distance =
      selectOffsetLeft + selectClientWidth * 0.5 - contentClientWidth * 0.5
    if (distance < 0) distance = 0
    if (distance > contentScrollWidth - contentClientWidth)
      distance = contentScrollWidth - contentClientWidth

    contentRef.current.style.transform = `translateX(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper isCenter={isCenter}>
      <div className="in-content" ref={contentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator
