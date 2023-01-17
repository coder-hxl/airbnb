import styled from 'styled-components'
import { IRightStyleProps } from './types'

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;

  .btns {
    display: flex;
    align-items: center;
    color: ${(props: IRightStyleProps) =>
      props.theme.isAlpha ? '#fff' : props.theme.text.secondaryColor};

    .btn {
      padding: 12px;
      font-weight: 600;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background-color: ${(props: IRightStyleProps) =>
          props.theme.isAlpha ? 'rgba(255,255,255,0.2)' : '#f5f5f5'};
      }
    }
  }

  .profile {
    position: relative;
    margin: 0 24px 0 6px;
    padding: 5px 0px 5px 12px;
    width: 78px;
    height: 42px;
    border: 1px solid #ddd;
    border-radius: 20px;
    ${(props) => props.theme.mixin.boxShadow}
    background-color: ${(props: IRightStyleProps) =>
      props.theme.isAlpha ? '#fff' : ' '};

    .box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
      cursor: pointer;

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;

        img {
          height: 100%;
        }
      }
    }

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      padding: 10px 0;
      width: 240px;
      border-radius: 6px;
      color: ${(props: IRightStyleProps) => props.theme.text.secondaryColor};
      background-color: #fff;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
      z-index: 99;

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
