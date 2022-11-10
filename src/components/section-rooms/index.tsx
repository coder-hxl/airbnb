import React, { memo } from 'react'
import SectionRoomsWrapper from './style'

import { IProps } from './types'

const SectionRooms = memo((props: IProps) => {
  const { roomList } = props

  return (
    <SectionRoomsWrapper>
      {roomList.slice(0, 8).map((item) => {
        return (
          <div key={item.id} className="room">
            <div className="cover">
              <img className="picture" src={item.picture_url} alt="图片" />
            </div>
            <div className="content">
              <div className="desc">
                {item.verify_info.messages.join(' · ')}
              </div>
              <div className="name">{item.name}</div>
              <div className="price">¥{item.price}/晚</div>
            </div>
          </div>
        )
      })}
    </SectionRoomsWrapper>
  )
})

export default SectionRooms
