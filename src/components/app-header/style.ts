import styled from 'styled-components'
import { IStyledComponent, IStyledProps } from './types'

const HeaderWrapper: IStyledComponent = styled.div`
  position: ${(props: IStyledProps) => (props.isFixed ? 'fixed' : 'none')};
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 80px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 9;
`

export default HeaderWrapper
