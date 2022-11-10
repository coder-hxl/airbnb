import styled from 'styled-components'

const FooterWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 50px;
  border-top: 1px solid #eee;

  .content {
    margin: 0 auto;
    padding: 30px 24px;
    width: 1080px;

    .desc {
      display: flex;
      justify-content: space-between;
      padding-bottom: 16px;
      font-weight: 600;
      border-bottom: 1px solid #eee;

      ul {
        margin-top: 14px;
        line-height: 22px;
        color: #767676;
      }
    }

    .text {
      margin-top: 16px;
      text-align: center;
    }
  }
`

export default FooterWrapper
