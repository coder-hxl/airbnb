import styled from 'styled-components'

const UserInfoWrapper = styled.div`
  flex: 2;
  padding-left: 60px;

  .boundary {
    margin: 30px 0;
    height: 1px;
    background-color: #ebebeb;
  }

  .title {
    color: #222222;
    font-size: 30px;
    font-weight: 600;
  }

  .create-time {
    margin-top: 8px;
    color: #717171;
  }

  .edit-info {
    margin-top: 18px;

    .text {
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }

    .info-form {
      margin-top: 20px;

      .btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px;
        font-size: 16px;
        font-weight: 600;

        .cancel {
          padding: 10px 14px;
          text-decoration: underline;
          border-radius: 8px;
          cursor: pointer;

          :hover {
            background-color: #f7f7f7;
          }
        }

        .save {
          padding: 14px 26px;
          color: #fff;
          background-color: #222222;
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }

  .data {
    margin-top: 30px;

    .introduce {
      .title {
        font-size: 24px;
        font-weight: 600;
      }

      .content {
        margin-top: 20px;
        font-size: 16px;
      }
    }
  }
`

export default UserInfoWrapper
