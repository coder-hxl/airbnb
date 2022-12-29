import styled from 'styled-components'

const EntireRoomsWrapper = styled.div`
  position: relative;
  padding: 30px 24px;

  .title {
    font-size: 22px;
    font-weight: 600;
  }

  .room-list {
    margin: 6px -8px 0;
    display: flex;
    flex-wrap: wrap;
  }

  .shade {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 999;
  }
`

export default EntireRoomsWrapper
