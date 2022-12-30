import React, { memo } from 'react'

import RoomInfosWrapper from './style'

import { IProps } from './types'

const RoomInfos = memo((props: IProps) => {
  const { itemData } = props

  return (
    <RoomInfosWrapper>
      <h2>
        {itemData.id} - {itemData.name}
      </h2>
    </RoomInfosWrapper>
  )
})

export default RoomInfos
