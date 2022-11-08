import styled from 'styled-components'

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primaryColor};
  margin-left: 24px;

  .logo {
    width: 102px;
    cursor: pointer;
  }
`

export default LeftWrapper
