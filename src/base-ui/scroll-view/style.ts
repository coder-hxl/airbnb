import styled from 'styled-components'
import { IStyledComponent } from './types'

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
      background-color: #ffffff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
      cursor: pointer;

      &:active {
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4);
      }
    }
  }

  .left {
    left: -14px;
    padding-right: 14px;
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .right {
    right: -14px;
    padding-left: 14px;
    background: linear-gradient(
      270deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

export default ScrollViewWrapper
