import styled from 'styled-components'

const FooterWrapper = styled.div`
  margin-top: 50px;
  border-top: 1px solid #eee;

  .content {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 50px 24px;
    width: 1080px;

    .desc {
      display: flex;
      padding-bottom: 18px;
      font-weight: 600;
      border-bottom: 1px solid #eee;

      .item {
        flex: 1;

        .title {
          font-size: 15px;
        }

        ul {
          margin-top: 12px;
          line-height: 22px;
          color: #767676;

          li {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .text {
      margin-top: 16px;
      text-align: center;
      color: #767676;
    }
  }
`

export default FooterWrapper
