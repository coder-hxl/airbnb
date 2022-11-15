import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'

import EntirePaginactionWrapper from './style'

import { RootState } from '@/store'
import { fetchRoomDataAction } from '@/store/modules/entire/actions'

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector((state: RootState) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }))
  const dispatch = useDispatch<any>()

  const pageCount = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  function paginationChangeHandle(
    event: React.ChangeEvent<unknown>,
    page: number
  ) {
    window.scrollTo({ left: 0, top: 0 })
    dispatch(fetchRoomDataAction(page))
  }

  return (
    <EntirePaginactionWrapper>
      <Pagination count={pageCount} onChange={paginationChangeHandle} />
      <div className="message">
        第 {startCount} - {endCount} 个房源, 总共超过{totalCount}
      </div>
    </EntirePaginactionWrapper>
  )
})

export default EntirePagination
