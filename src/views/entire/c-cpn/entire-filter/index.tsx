import React, { memo, useState } from 'react'

import filterData from '@/assets/data/filter_data.json'

import EntireFilterWrapper from './style'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState<string[]>([])

  function filterClickHandle(item: string) {
    const newSelectItems = [...selectItems]
    if (newSelectItems.includes(item)) {
      newSelectItems.splice(newSelectItems.indexOf(item), 1)
    } else {
      newSelectItems.push(item)
    }
    setSelectItems(newSelectItems)
  }

  return (
    <EntireFilterWrapper>
      {filterData.map((item) => {
        return (
          <div
            key={item}
            className={classNames('filter-btn', {
              active: selectItems.includes(item),
            })}
            onClick={() => filterClickHandle(item)}
          >
            {item}
          </div>
        )
      })}
    </EntireFilterWrapper>
  )
})

export default EntireFilter
