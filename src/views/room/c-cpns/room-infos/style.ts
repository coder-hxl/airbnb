import styled from 'styled-components'

const RoomInfosWrapper = styled.div`
  --border-bottom-color: #ebebeb;

  margin: 0 auto;
  padding: 10px 0 20px;
  width: 1080px;

  .area {
    padding: 14px 0 26px 0;
    border-bottom: 1px solid var(--border-bottom-color);
  }

  .detail {
    .room {
      .introduce {
        font-size: 12px;
        font-weight: 600;
      }

      .name {
        margin: 10px 0 6px;
        font-size: 30px;
        font-weight: 600;
      }

      .address {
        margin-bottom: 12px;
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

    .landlord {
      .landlord {
        display: flex;
        align-items: center;

        .avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;

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
  }

  .review {
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

    .list {
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
            border-radius: 50%;
            overflow: hidden;

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

            .create-at {
              font-size: 13px;
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

    .pagination {
      margin-top: 10px;

      .MuiPagination-root {
        .MuiPaginationItem-previousNext {
          color: #008489;
          border: 1px solid #008489;

          &:hover {
            background-color: transparent;
          }
        }

        .MuiPaginationItem-page {
          margin: 0 8px;
          padding: 4px 0 0 2px;
          color: #008489;

          &:hover {
            text-decoration: underline;
            background-color: transparent;
          }
        }

        .Mui-selected {
          color: #fff;
          background-color: #008489;

          &:hover {
            background-color: #008489;
          }
        }
      }
    }
  }
`

export default RoomInfosWrapper
