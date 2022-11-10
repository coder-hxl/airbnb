import styled from 'styled-components'

const SectionHeaderWrapper = styled.div`
  padding-bottom: 12px;
  color: ${(props) => props.theme.text.secondaryColor};

  .title {
    font-size: 23px;
  }

  .subTitle {
    margin-top: 14px;
    font-size: 16px;
  }
`

export default SectionHeaderWrapper
