import styled from 'styled-components'

const userWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 20px 0;
  width: 1080px;

  .left {
    flex: 1;
    padding: 30px 20px;
    border: 1px solid #dddddd;
    border-radius: 8px;

    .avatar-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar {
        width: 120px;
        height: 120px;

        img {
          height: 100%;
        }
      }

      .update-avatar {
        margin-top: 10px;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .boundary {
      margin: 30px 0;
      border-top: 1px solid #dddddd;
    }

    .verify {
      .title {
        font-size: 22px;
        font-weight: 600;
      }
    }
  }

  .right {
    flex: 2;
    padding-left: 60px;

    .info {
      .title {
        color: #222222;
        font-size: 30px;
        font-weight: 600;
      }

      .create-time {
        margin: 8px 0 0 6px;
        color: #717171;
      }

      .introduce {
        margin: 8px 0 0 6px;
        font-size: 16px;
      }

      .change-info {
        margin-top: 18px;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`

export default userWrapper
