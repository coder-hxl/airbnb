import styled from 'styled-components'

const FeedbackWrapper = styled.div`
  .feedback-box {
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    padding: 12px 14px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.2);
    z-index: 999;

    .content {
      margin-left: 6px;
    }
  }

  .popup-appear,
  .popup-enter {
    top: -50px;
  }

  .popup-enter-active,
  .popup-appear-active {
    top: 50px;
    transition: all 500ms ease;
  }

  .popup-exit {
    opacity: 1;
  }

  .popup-exit-active {
    opacity: 0;
    transition: all 500ms ease;
  }
`

export default FeedbackWrapper
