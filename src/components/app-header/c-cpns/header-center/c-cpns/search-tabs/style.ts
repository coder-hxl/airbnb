import styled from 'styled-components'
import { IStyldProps } from './types'

const SearchTabsWrapper = styled.div`
  display: flex;
  justify-content: center;

  .item {
    margin: 0 16px;
    padding: 10px 0;
    font-size: 16px;
    color: ${(porps: IStyldProps) =>
      porps.theme.isAlpha ? '#fff' : porps.theme.text.secondaryColor};

    &:hover {
      color: #a3a3a3;
      border-bottom: 2px solid #afafa7;
    }

    &.active {
      border-bottom: 2px solid
        ${(porps: IStyldProps) => (porps.theme.isAlpha ? '#fff' : '#000')};

      :hover {
        color: ${(porps: IStyldProps) =>
          porps.theme.isAlpha ? '#fff' : porps.theme.text.secondaryColor};
      }
    }
  }
`

export default SearchTabsWrapper
