import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'

import { fetchRoomDataAction } from '@/store/modules/entire/actions'

import EntirePaginactionWrapper from './style'

import { RootState } from '@/store'

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector((state: RootState) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
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
    dispatch(fetchRoomDataAction(page - 1))
  }

  return (
    <EntirePaginactionWrapper>
      {!!pageCount && (
        <>
          <Pagination count={pageCount} onChange={paginationChangeHandle} />
          <div className="message">
            第 {startCount} - {endCount} 个房源, 总共超过{totalCount}
          </div>
        </>
      )}
    </EntirePaginactionWrapper>
  )
})

export default EntirePagination
