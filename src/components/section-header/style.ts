import styled from 'styled-components'

const SectionHeaderWrapper = styled.div`
  padding-bottom: 12px;
  color: ${(props) => props.theme.text.secondaryColor};

  .title {
    font-size: 23px;
    font-weight: 600;
  }

  .subTitle {
    margin-top: 6px;
    font-size: 16px;
  }
`

export default SectionHeaderWrapper
