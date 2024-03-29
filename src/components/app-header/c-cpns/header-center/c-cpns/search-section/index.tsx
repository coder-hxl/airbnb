import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { debounce } from 'underscore'

import { openFeedbackAction } from '@/store/modules/feedback'
import IconSearchBar from '@/assets/svg/icon_search_bar'
import SearchSectionWrapper from './style'

import { ISearchSectionProps } from './types'
import { IAnyObject } from '@/types/common'

const SearchSection = memo((props: ISearchSectionProps) => {
  const { section, onSearchClick } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initFormData: IAnyObject = {}
  section.forEach((item) => {
    initFormData[item.title] = ''
  })
  const [formData, setFormData] = useState(initFormData)

  const handleInputChange = (key: string) => {
    return debounce((e: any) => {
      const value = e.target.value
      const newData = { ...formData, [key]: value }
      setFormData(newData)
    }, 200)
  }

  function handleSearchBarClick() {
    const city = formData['城市']
    if (city) {
      onSearchClick()
      navigate(`/area/${city}?type=search`)
    } else {
      dispatch(openFeedbackAction({ type: 'warning', content: '请输入城市~' }))
    }
  }

  return (
    <SearchSectionWrapper>
      <div className="search">
        {section.map((search) => {
          return (
            <div key={search.title} className="search-info">
              <div className="title">{search.title}</div>
              <input
                className="ipt"
                placeholder={search.desc}
                onInput={handleInputChange(search.title)}
              />
            </div>
          )
        })}
      </div>
      <div className="icon-search" onClick={handleSearchBarClick}>
        <IconSearchBar />
      </div>
    </SearchSectionWrapper>
  )
})

export default SearchSection
