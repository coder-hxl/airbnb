import styled from 'styled-components'

import { IStyledComponent, IStyledProps } from './types'

const SectionTabsWrapper: IStyledComponent = styled.div`
  display: flex;
  margin-bottom: 16px;

  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 16px;
    padding: 15px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    white-space: nowrap;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    :hover {
      ${(props: IStyledProps) => props.theme.mixin.boxShadow}
    }
  }

  .active {
    color: #fff;
    background-color: ${(props: IStyledProps) =>
      props.theme.color.secondaryColor};
  }
`

export default SectionTabsWrapper
