import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchAreaDataAction } from '@/store/modules/area/actions'

import AreaWrapper from './style'
import AreaFilter from './c-cpn/area-filter'
import AreaPagination from './c-cpn/area-pagination'
import AreaRooms from './c-cpn/area-rooms'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Area = memo(() => {
  const dispatch = useDispatch<any>()
  const { areaName } = useParams()

  useEffect(() => {
    dispatch(fetchAreaDataAction(areaName ?? ''))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch, areaName])

  return (
    <AreaWrapper>
      <AreaFilter />
      <AreaRooms />
      <AreaPagination areaName={areaName ?? ''} />
    </AreaWrapper>
  )
})

export default Area
