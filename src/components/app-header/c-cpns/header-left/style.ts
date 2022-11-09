import styled from 'styled-components'

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    width: 102px;
    cursor: pointer;
  }
`

export default LeftWrapper
