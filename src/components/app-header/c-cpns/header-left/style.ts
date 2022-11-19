import styled from 'styled-components'
import { ILeftStyleProps } from './types'

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props: ILeftStyleProps) =>
    props.theme.isAlpha ? '#fff' : props.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    width: 102px;
    cursor: pointer;
  }
`

export default LeftWrapper
