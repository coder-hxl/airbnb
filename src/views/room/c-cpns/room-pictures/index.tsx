import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'

import RoomPicturesWrapper from './style'

import { IRoomPictureProps } from './types'

const RoomPictures = memo((props: IRoomPictureProps) => {
  const { pictures } = props
  const [showBrowser, setShowBrowser] = useState(false)

  return (
    <RoomPicturesWrapper>
      <div className="pictures" onClick={(e) => setShowBrowser(true)}>
        <div className="left">
          <div className="item">
            <img src={pictures[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {pictures.slice(1, 5).map((item, index) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="look-picture" onClick={(e) => setShowBrowser(true)}>
        查看图片
      </div>

      {showBrowser && (
        <PictureBrowser
          pictureUrls={pictures}
          closeBtnClick={() => setShowBrowser(false)}
        />
      )}
    </RoomPicturesWrapper>
  )
})

export default RoomPictures
