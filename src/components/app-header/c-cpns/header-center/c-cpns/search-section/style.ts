import { IDivStyledProps } from '@/types/styled-component'
import styled from 'styled-components'

const SearchSectionWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  width: 860px;
  height: 68px;
  border-radius: 40px;
  border: 1px solid #dddddd;
  background-color: #fff;
  overflow: hidden;

  .search {
    flex: 1;
    display: flex;
    align-items: center;

    .search-info {
      position: relative;
      flex: 1;
      height: 100%;
      padding: 16px 0 0 26px;

      &:hover {
        border-radius: 50px;
        background-color: #ebebeb;

        .ipt {
          background-color: #ebebeb;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
        height: 50%;
        border-right: 1px solid #dddddd;
      }

      .title {
        font-size: 12px;
        font-weight: 600;
      }

      .ipt {
        margin-top: 4px;
        width: 80%;
        color: #656565;
        border: none;

        &:focus {
          outline: none;
        }
      }
    }

    .search-info:last-child {
      &::after {
        border-right: 1px solid transparent;
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
`

export default SearchSectionWrapper
