import styled from 'styled-components'

const FormWrapper = styled.div`
  .item {
    margin-bottom: 16px;
    height: 46px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
  }

  .input-focused {
    &:focus {
      border: 1px solid #008489;
      box-shadow: none;
    }
  }

  .ant-input-affix-wrapper-focused {
    border: 1px solid #008489;
    box-shadow: none;
  }
`

export default FormWrapper
