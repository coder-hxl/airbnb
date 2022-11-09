import styled from 'styled-components'

const CenterWrapper = styled.div`
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
`

export default CenterWrapper
