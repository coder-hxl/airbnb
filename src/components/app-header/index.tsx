import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import HeaderWrapper from './style'
import Left from './c-cpns/header-left'
import Center from './c-cpns/header-center'
import Right from './c-cpns/header-right'
import { RootState } from '@/store'

const AppHeader = memo(() => {
  const { isFixed } = useSelector((state: RootState) => ({
    isFixed: state.main.headerConfig.isFixed,
  }))

  return (
    <HeaderWrapper isFixed={isFixed}>
      <Left />
      <Center />
      <Right />
    </HeaderWrapper>
  )
})

export default AppHeader
