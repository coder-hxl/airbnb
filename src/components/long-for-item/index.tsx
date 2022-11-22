import React, { memo } from 'react'

import LongForItemWrapper from './style'

import { IProps } from './types'

const LongForItem = memo((props: IProps) => {
  const { itemData } = props

  return (
    <LongForItemWrapper>
      <div className="inner">
        <img className="cover" src={itemData.picture_url} alt="" />
        <div className="cover-shade"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})

export default LongForItem