import styled from 'styled-components'

const UserInfoWrapper = styled.div`
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
`

export default UserInfoWrapper
