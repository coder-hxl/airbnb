import styled from 'styled-components'

const UserVerifyWrapper = styled.div`
  flex: 1;
  padding: 30px 20px 60px;
  border: 1px solid #dddddd;
  border-radius: 8px;

  .avatar-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;

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

    .ant-upload-list {
      display: none;
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
`

export default UserVerifyWrapper
