import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import PictureBrowserWrapper from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleBottom from '@/assets/svg/icon_triangle_bottom'
import IconTriangleTop from '@/assets/svg/icon_triangle_top'
import Indicator from '../indicator'

import { IPictureBrowserProps } from './types'
import classNames from 'classnames'

const PictureBrowser = memo((props: IPictureBrowserProps) => {
  const { pictureUrls, defaultIndex = 0, closeBtnClick } = props
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1

    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex === pictureUrls.length) newIndex = 0

    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function previewItemClickHandle(index: number) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={() => closeBtnClick(currentIndex)}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="76px" height="76px" />
          </div>
          <div className="btn" onClick={(e) => controlClickHandle()}>
            <IconArrowRight width="76px" height="76px" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="fade"
              timeout={300}
              addEndListener={() => {}}
            >
              <img
                src={pictureUrls[currentIndex]}
                alt=""
                onClick={(e) => controlClickHandle()}
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div>
              {currentIndex + 1}/{pictureUrls.length}
            </div>
            <div onClick={(e) => setShowList(!showList)}>
              {showList ? '隐藏' : '显示'}图片列表
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex} center={false}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    key={item}
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                    onClick={(e) => previewItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser
