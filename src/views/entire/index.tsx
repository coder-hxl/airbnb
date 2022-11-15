import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchRoomDataAction } from '@/store/modules/entire/actions'

import EntireWrapper from './style'
import EntireFilter from './c-cpn/entire-filter'
import EntirePagination from './c-cpn/entire-pagination'
import EntireRooms from './c-cpn/entire-rooms'

const Entire = memo(() => {
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(fetchRoomDataAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
