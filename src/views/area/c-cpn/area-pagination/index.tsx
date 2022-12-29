import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'

import { fetchRoomDataAction } from '@/store/modules/area/actions'

import AreaPaginactionWrapper from './style'

import { RootState } from '@/store'
import { IProps } from './types'

const AreaPagination = memo((props: IProps) => {
  const { areaName } = props
  const { totalCount, currentPage } = useSelector((state: RootState) => ({
    totalCount: state.area.totalCount,
    currentPage: state.area.currentPage
  }))

  const pageCount = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch<any>()
  function paginationChangeHandle(
    event: React.ChangeEvent<unknown>,
    page: number
  ) {
    window.scrollTo(0, 0)
    dispatch(fetchRoomDataAction(areaName, page - 1))
  }

  return (
    <AreaPaginactionWrapper>
      {!!pageCount && (
        <>
          <Pagination count={pageCount} onChange={paginationChangeHandle} />
          <div className="message">
            第 {startCount} - {endCount} 个房源, 总共超过{totalCount}
          </div>
        </>
      )}
    </AreaPaginactionWrapper>
  )
})

export default AreaPagination
