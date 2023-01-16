import styled from 'styled-components'

const FeedbackWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  .box {
    .item {
      display: flex;
      margin-top: 8px;
      padding: 12px 14px;
      border-radius: 6px;
      background-color: #fff;
      box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.2);

      .content {
        margin-left: 6px;
      }
    }
  }

  .popup-appear,
  .popup-enter {
    opacity: 0;
  }

  .popup-enter-active,
  .popup-appear-active {
    opacity: 1;
    transition: all 500ms ease-in;
  }

  .popup-exit {
    opacity: 1;
  }

  .popup-exit-active {
    opacity: 0;
    transition: all 500ms ease-in;
  }
`

export default FeedbackWrapper
