import styled from 'styled-components'

const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 50px;

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 8px 10px 8px 24px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 30px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    .text {
      font-weight: 800;
      color: ${(props) => props.theme.text.primaryColor};
    }

    .icon-serach {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }

  .serach-detail {
    .search-section {
      position: relative;
    }
  }

  /* 动画 */
  .bar-enter {
    transform: scale(2) translateY(100%);
    opacity: 0;
  }

  .bar-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-exit {
  }

  .bar-exit-active {
    transform: scale(0.6) translateY(-100%);
    opacity: 0;
    transition: all 250ms ease;
  }

  .detail-enter {
    transform: scale(0.6) translateY(-100%);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .detail-exit {
  }

  .detail-exit-active {
    transform: scale(0.6) translateY(-100%);
    opacity: 0;
    transition: all 250ms ease;
  }
`

export default CenterWrapper
