import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useEffect, useState, useCallback } from 'react'

import RoomPicturesWrapper from './style'

import { IRoomPictureProps } from './types'

const RoomPictures = memo((props: IRoomPictureProps) => {
  const { pictures } = props
  const [showBrowser, setShowBrowser] = useState(false)
  const [selectPicture, setSelectPicture] = useState<any[]>([])
  const [selectIndex, setSelectIndex] = useState(0)

  useEffect(() => {
    const newSelectPicture: any[] = [pictures[0]]

    if (pictures.length >= 5) {
      pictures.slice(1, 5).forEach((item, index) => {
        if (index % 2) {
          const lastIndex = newSelectPicture.length - 1
          newSelectPicture[lastIndex].push(item)
        } else {
          newSelectPicture.push([item])
        }
      })
    }

    setSelectPicture(newSelectPicture)
  }, [pictures])

  function pictureClickHandle(item: string) {
    const index = pictures.findIndex((value) => value === item)
    setSelectIndex(index)
    setShowBrowser(true)
  }

  const pictureBrowserCloseBtnClickHandle = useCallback((index: number) => {
    setSelectIndex(index)
    setShowBrowser(false)
  }, [])

  return (
    <RoomPicturesWrapper>
      <div className="pictures">
        {selectPicture.map((item, index) => {
          return !Array.isArray(item) ? (
            <div
              key={index}
              className="first"
              onClick={() => pictureClickHandle(item)}
            >
              <div className="item">
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            </div>
          ) : (
            <div key={index} className="two">
              {item.map((cItem, cIndex) => {
                return (
                  <div
                    className="item"
                    key={cIndex}
                    onClick={() => pictureClickHandle(cItem)}
                  >
                    <img src={cItem} alt="" />
                    <div className="cover"></div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      <div className="look-picture" onClick={(e) => setShowBrowser(true)}>
        查看图片
      </div>

      {showBrowser && (
        <PictureBrowser
          pictureUrls={pictures}
          defaultIndex={selectIndex}
          closeBtnClick={pictureBrowserCloseBtnClickHandle}
        />
      )}
    </RoomPicturesWrapper>
  )
})

export default RoomPictures
