import styled from 'styled-components'

const EntireFilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  display: flex;
  padding: 8px 20px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 9;

  .filter-btn {
    margin: 0 6px;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      border: 1px solid #f2f2f2;
      background-color: #f2f2f2;
    }
  }

  .filter-btn.active {
    border: 1px solid #008489;
    color: #ffffff;
    background-color: #008489;
  }
`

export default EntireFilterWrapper
