import React, { memo } from 'react'

import HeaderWrapper from './style'
import Left from './c-cpns/header-left'
import Center from './c-cpns/header-center'
import Right from './c-cpns/header-right'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <Left />
      <Center />
      <Right />
    </HeaderWrapper>
  )
})

export default AppHeader
