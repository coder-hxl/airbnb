import styled from 'styled-components'
import { IStyledComponent, IStyledProps } from './types'

const PictureBrowserWrapper: IStyledComponent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #262626;
  z-index: 999;

  .top {
    height: 86px;
    position: relative;
    .close-btn {
      position: absolute;
      top: 20px;
      right: 40px;
    }
  }

  .slider {
    flex: 1;
    position: relative;
    min-height: 200px;
    overflow: hidden;

    .control {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #fff;
      }
    }

    .container {
      flex: 1;
      display: flex;
      justify-content: center;
      height: 100%;

      .fade-enter {
        transform: translate(
          ${(props: IStyledProps) => (props.isNext ? '100%' : '-100%')}
        );
        opacity: 0;
      }

      .fade-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 300ms ease;
      }

      .fade-exit {
        opacity: 1;
      }

      .fade-exit-active {
        opacity: 0;
        transition: all 300ms ease;
      }

      img {
        height: 100%;
        user-select: none;
      }
    }
  }

  .preview {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 4px 0 100px;
    height: 100px;

    .info {
      position: absolute;
      bottom: 0;
      width: 1200px;

      .desc {
        display: flex;
        justify-content: space-between;
        color: #fff;
        user-select: none;
      }

      .list {
        margin-top: 10px;
        height: ${(props: IStyledProps) => (props.showList ? '70px' : '0')};
        transition: height 500ms ease;
        overflow: hidden;

        .item {
          flex-shrink: 0;
          margin: 0 5px;
          width: 110px;
          height: 70px;
          opacity: 0.5;

          &.active {
            opacity: 1;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
          }
        }
      }
    }
  }
`

export default PictureBrowserWrapper
