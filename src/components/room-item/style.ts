import styled from 'styled-components'

const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px 8px;
  width: 25%;

  .cover {
    position: relative;
    padding-top: 200px;
    border-radius: 3px;
    overflow: hidden;

    .picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .content {
    margin-top: 10px;

    .desc {
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

      .MuiRating-icon {
        margin-left: -2px;
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
