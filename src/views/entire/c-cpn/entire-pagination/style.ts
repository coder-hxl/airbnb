import styled from 'styled-components'
import { IStyledProps } from './types'

const EntirePaginactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  color: ${(porps: IStyledProps) => porps.theme.text.secondaryColor};

  .MuiSvgIcon-fontSizeMedium {
    font-size: 26px;
  }

  .MuiPaginationItem-page {
    margin: 0 8px;
    padding: 4px 0 0 2px;
    :hover {
      text-decoration: underline;
    }
  }

  .MuiPaginationItem-page.Mui-selected {
    color: #ffffff;
    background-color: ${(props: IStyledProps) =>
      props.theme.text.secondaryColor};

    :hover {
      text-decoration: none;
      background-color: ${(props: IStyledProps) =>
        props.theme.text.secondaryColor};
    }
  }

  .message {
    margin-top: 14px;
  }
`

export default EntirePaginactionWrapper
