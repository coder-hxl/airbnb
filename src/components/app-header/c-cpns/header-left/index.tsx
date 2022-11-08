import React, { memo } from 'react'

import LeftWrapper from './style'
import IconLogo from '@/assets/svg/icon_logo'

const Left = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default Left
