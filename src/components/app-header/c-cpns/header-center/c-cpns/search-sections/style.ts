import { IDivStyledProps } from '@/types/styled-component'
import styled from 'styled-components'

const SearchSectionsWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  width: 860px;
  height: 68px;
  border-radius: 40px;
  border: 1px solid #dddddd;
  background-color: #fff;
  overflow: hidden;

  .section {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;

    .search {
      flex: 1;
      display: flex;
      align-items: center;

      .search-info {
        flex: 1;
        display: flex;
        align-items: center;
        height: 100%;

        &:hover {
          border-radius: 50px;
          background-color: #ebebeb;

          .info {
            border-left: 1px solid transparent;
          }
        }

        .info {
          padding-left: 20px;
          border-left: 1px solid #ccc;

          .title {
            font-size: 12px;
            font-weight: 600;
          }

          .desc {
            margin-top: 2px;
            color: #656565;
          }
        }

        &:first-of-type {
          .info {
            border-left: 1px solid transparent;
          }
        }
      }
    }

    .icon-search {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props: IDivStyledProps<{}>) =>
        props.theme.color.primaryColor};

      &:hover {
        background-color: #e41d54;
      }

      > svg {
        width: 15px !important;
        height: 15px !important;
      }
    }
  }
`

export default SearchSectionsWrapper
