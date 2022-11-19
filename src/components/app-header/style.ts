import styled from 'styled-components'
import {
  IHeaderPlaceholderCpn,
  IHeaderPlaceholderStyledProps,
  IStyledComponent,
  IStyledProps,
} from './types'

const HeaderWrapper: IStyledComponent = styled.div`
  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }

  .content {
    border-bottom: ${(props: IStyledProps) =>
      props.theme.isAlpha ? 'none' : '1px solid #eee'};
    background: ${(props: IStyledProps) =>
      props.theme.isAlpha
        ? 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))'
        : '#fff'};

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`

export const HeaderPlaceholderWrapper: IHeaderPlaceholderCpn = styled.div`
  height: ${(props: IHeaderPlaceholderStyledProps) =>
    props.isSearch ? '80px' : '0'};
  transition: height 250ms ease;
`

export default HeaderWrapper
