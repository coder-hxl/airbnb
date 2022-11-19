import IconSearchBar from '@/assets/svg/icon_search_bar'
import React, { memo } from 'react'

import SearchSectionsWrapper from './style'

import { ISearchSectionsProps } from './types'

const SearchSections = memo((props: ISearchSectionsProps) => {
  const { currentIndex, sections } = props

  return (
    <SearchSectionsWrapper>
      {sections.map((item, index) => {
        return currentIndex === index ? (
          <div key={index} className="section">
            <div className="search">
              {item.map((search) => {
                return (
                  <div key={search.title} className="search-info">
                    <div className="info">
                      <div className="title">{search.title}</div>
                      <div className="desc">{search.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="icon-search">
              <IconSearchBar />
            </div>
          </div>
        ) : (
          ''
        )
      })}
    </SearchSectionsWrapper>
  )
})

export default SearchSections
