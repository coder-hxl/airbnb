import React, { memo, useEffect, useRef, useState } from 'react'

import ScrollViewWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

import { IProps } from './types'

const ScrollView = memo((props: IProps) => {
  const { children } = props

  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const scrollContentRef = useRef<HTMLDivElement>({} as HTMLDivElement)
  const currentIndexRef = useRef(0)
  const totalDistanceRef = useRef(0)

  useEffect(() => {
    const clientWidth = scrollContentRef.current?.clientWidth ?? 0
    const scrollWidth = scrollContentRef.current?.scrollWidth ?? 0

    // 根据可以滚动的宽度, 设置是否显示右按钮
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [])

  function controllerScroll(isRight: boolean) {
    const newIndex = isRight
      ? currentIndexRef.current + 1
      : currentIndexRef.current - 1
    const childrenEL = scrollContentRef.current
      ?.children as unknown as HTMLElement[]

    // 根据偏移量, 设置滚动距离
    const offsetLeft = childrenEL[newIndex].offsetLeft
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
    currentIndexRef.current = newIndex
    // 是否显示按钮
    setShowRight(offsetLeft < totalDistanceRef.current)
    setShowLeft(offsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="controller-box left">
          <div className="btn" onClick={() => controllerScroll(false)}>
            <IconArrowLeft />
          </div>
        </div>
      )}
      {showRight && (
        <div className="controller-box right">
          <div className="btn" onClick={() => controllerScroll(true)}>
            <IconArrowRight />
          </div>
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView
