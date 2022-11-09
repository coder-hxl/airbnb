import styled from 'styled-components'

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;

  .btns {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.text.secondaryColor};

    .btn {
      padding: 12px;
      font-weight: 600;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    margin: 0 24px 0 6px;
    padding: 5px 0px 5px 10px;
    width: 66px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 20px;
    ${(props) => props.theme.mixin.boxShadow}

    .icons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      padding: 10px 0;
      width: 240px;
      border-radius: 6px;
      color: ${(props) => props.theme.text.secondaryColor};
      background-color: #fff;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);

      .partition {
        margin: 8px 0;
        border-bottom: 1px solid #ddd;
      }

      .item {
        padding: 0 14px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`

export default RightWrapper
