import styled from 'styled-components'

const SectionTabsWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;

  .item {
    flex-basis: 100px;
    margin-right: 16px;
    padding: 10px 15px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 10%);

    :hover {
      ${(props) => props.theme.mixin.boxShadow}
    }
  }

  .active {
    color: #fff;
    background-color: #00848a;
  }
`

export default SectionTabsWrapper
