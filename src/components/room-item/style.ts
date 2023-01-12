import styled from 'styled-components'

import { IStyledComponent, IStyledProps } from './types'

const RoomItemWrapper: IStyledComponent = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 10px 8px;
  width: ${(props: IStyledProps) => props.itemWidth};

  .container {
    position: relative;
    padding-top: 60%;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;

    .picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .controller {
        display: flex;
      }
    }

    .controller {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: none;
      justify-content: space-between;
      z-index: 1;

      .btn {
        display: flex;
        align-items: center;
        padding: 0 20px;
        height: 100%;
        color: #ffffff;
      }

      .left {
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.25) 0,
          rgba(0, 0, 0, 0.1) 80%,
          rgba(0, 0, 0, 0)
        );
      }

      .right {
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.25) 0,
          rgba(0, 0, 0, 0.1) 80%,
          rgba(0, 0, 0, 0)
        );
      }
    }

    .indicator {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 30%;
      z-index: 1;

      .item {
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.28%;

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.8);

          &.active {
            width: 9px;
            height: 9px;
            background-color: #ffffff;
          }
        }
      }
    }
  }

  .i-content {
    margin-top: 10px;

    .type {
      font-size: 12px;
      font-weight: 600;
    }

    .name {
      margin-top: 4px;
      line-height: 21px;
      font-size: 15px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin-top: 6px;
    }

    .evaluate {
      display: flex;
      align-items: center;
      padding-top: 4px;

      .MuiRating-icon {
        margin-left: -2px;
        color: ${(props: IStyledProps) => props.color};
      }

      .message {
        padding-left: 2px;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`

export default RoomItemWrapper
