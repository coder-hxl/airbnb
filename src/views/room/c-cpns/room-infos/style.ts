import styled from 'styled-components'

const RoomInfosWrapper = styled.div`
  --border-bottom-color: #ebebeb;

  margin: 0 auto;
  padding: 20px 0;
  width: 1080px;

  .area {
    padding: 14px 0 26px 0;
    border-bottom: 1px solid var(--border-bottom-color);
  }

  .room-detail {
    .introduce {
      font-size: 12px;
      font-weight: 600;
    }

    .name {
      padding: 14px 0;
      font-size: 30px;
      font-weight: 600;
    }

    .bed-type {
      font-size: 15px;
    }

    .star-info {
      display: inline-block;
      margin-top: 10px;
      padding: 6px 8px;
      font-size: 12px;
      font-weight: 600;
      color: #2a6e00;
      background-color: #eaf7ea;
      border-radius: 20px;
    }
  }

  .landlord-detail {
    .landlord {
      display: flex;
      align-items: center;

      .avatar {
        width: 56px;
        height: 56px;

        img {
          width: 100%;
        }
      }

      .name {
        margin-left: 14px;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .introduction {
      position: relative;
      margin-top: 16px;
      padding: 26px 16px 20px;
      background-color: #f8f8f8;
      border-radius: 10px;

      .triangle {
        position: absolute;
        top: -20px;
        left: 16px;
        display: inline-block;
        border: 10px solid transparent;
        border-bottom: 10px solid #f8f8f8;
      }

      .text {
        line-height: 22px;
        font-size: 16px;
      }
    }
  }

  .reviews-container {
    .header {
      margin-top: 16px;

      .title {
        font-size: 26px;
        font-weight: 600;
      }

      .star {
        display: flex;
        align-items: center;
        margin-top: 10px;

        .reviews-count {
          margin-left: 10px;
        }
      }
    }

    .reviews {
      padding: 16px 0;

      .item {
        padding: 26px 0;
        border-bottom: 1px solid var(--border-bottom-color);

        .user-info {
          display: flex;
          align-items: center;

          .avatar {
            width: 46px;
            height: 46px;

            img {
              width: 100%;
            }
          }

          .user {
            margin-left: 15px;

            .name {
              margin-bottom: 4px;
              font-size: 16px;
              font-weight: 600;
            }
          }
        }

        .star {
          margin: 6px 0;
        }

        .comment {
          font-size: 16px;
        }
      }
    }
  }
`

export default RoomInfosWrapper
