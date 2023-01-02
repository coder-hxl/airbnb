import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import LongForItemWrapper from './style'

import { IProps } from './types'

const LongForItem = memo((props: IProps) => {
  const { itemData } = props
  const navigate = useNavigate()

  function innerClickHandle() {
    const { city } = itemData
    navigate(`/area/${city}?type=longFor`)
  }

  return (
    <LongForItemWrapper>
      <div className="inner" onClick={innerClickHandle}>
        <img className="cover" src={itemData.pictureUrl} alt="" />
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
