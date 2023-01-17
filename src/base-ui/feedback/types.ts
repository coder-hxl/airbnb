import styled from 'styled-components'

const FeedbackWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 2%;
  z-index: 999;

  .box {
    .item {
      display: flex;
      margin-top: 16px;
      padding: 16px 22px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 4px 12px 4px rgba(0, 0, 0, 0.1);

      .content {
        padding: 0 10px 0;
        line-height: 19px;
        font-size: 15px;
      }
    }
  }

  .popup-appear,
  .popup-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .popup-enter-active,
  .popup-appear-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 500ms ease-in;
  }

  .popup-exit {
    transform: translateX(0);
    opacity: 1;
  }

  .popup-exit-active {
    transform: translateX(100%);
    opacity: 0;
    transition: all 500ms ease-in;
  }
`

export default FeedbackWrapper
