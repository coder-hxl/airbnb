import styled from 'styled-components'

const LoginWrapper = styled.div`
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px 32px 46px;
    width: 560px;
    background-color: #fff;
    border-radius: 4px;
    z-index: 999;

    .close {
      display: flex;
      justify-content: right;

      .btn {
        cursor: pointer;
      }
    }

    .title {
      margin-top: 4px;

      .main-title {
        font-size: 26px;
        font-weight: 600;
      }

      .sub-title {
        margin-top: 14px;

        .type-switch {
          margin-left: 6px;
          color: #008489;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .forms {
      margin-top: 24px;

      .forget-password {
        margin-top: 4px;
        text-align: right;
        font-weight: 600;
        color: #008489;

        span {
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .login-btn {
        display: block;
        margin: 32px auto 0;
        width: 80%;
        height: 48px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        background-color: #008489;
        border: none;
        border-radius: 6px;
        cursor: pointer;

        &:active {
          background-color: #006a70;
        }
      }
    }
  }

  .cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.74);
    z-index: 998;
  }
`

export default LoginWrapper
