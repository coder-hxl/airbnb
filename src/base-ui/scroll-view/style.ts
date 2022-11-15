import styled from 'styled-components'
import { IStyledComponent, IStyledProps } from './types'

function getShade(degNum: number) {
  return `linear-gradient(
      ${degNum}deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    )`
}

const ScrollViewWrapper: IStyledComponent = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 500ms ease;
    }
  }

  .controller-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 2;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #f7f7f7;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
      transition: all 400ms ease;
      cursor: pointer;

      &:hover {
        background-color: #ffffff;
      }
    }
  }

  .left {
    left: -14px;
    padding-right: 14px;
    background: ${(props: IStyledProps) =>
      props.showShade ? getShade(90) : 'none'};
  }

  .right {
    right: -14px;
    padding-left: 14px;
    background: ${(props: IStyledProps) =>
      props.showShade ? getShade(270) : 'none'};
  }
`

export default ScrollViewWrapper
