import styled from 'styled-components'
import { IStyldProps } from './types'

const SearchTabsWrapper = styled.div`
  display: flex;
  justify-content: center;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 16px 0;
    cursor: pointer;

    &.active {
      .border {
        width: 100%;
      }
    }

    &:hover:not(.active) {
      .text {
        color: #a3a3a3;
      }

      .border {
        width: 100%;
        background-color: #afafa7;
      }
    }

    .text {
      font-size: 16px;
      color: ${(porps: IStyldProps) =>
        porps.theme.isAlpha ? '#fff' : porps.theme.text.secondaryColor};
    }

    .border {
      margin-top: 10px;
      width: 0;
      height: 2px;
      background-color: ${(porps: IStyldProps) =>
        porps.theme.isAlpha ? '#fff' : '#000'};
      transition: all 200ms ease;
    }
  }
`

export default SearchTabsWrapper
