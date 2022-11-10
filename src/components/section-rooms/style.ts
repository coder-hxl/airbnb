import styled from 'styled-components'

const SectionRoomsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;

  .room {
    box-sizing: border-box;
    padding: 10px 8px;
    width: 25%;

    .cover {
      position: relative;
      padding-top: 200px;
      border-radius: 3px;
      overflow: hidden;

      .picture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .content {
      margin-top: 10px;

      .desc {
        font-size: 12px;
        font-weight: 600;
      }

      .name {
        margin-top: 4px;
        line-height: 21px;
        font-size: 15px;
        font-weight: 700;
      }

      .price {
        margin-top: 6px;
      }
    }
  }
`

export default SectionRoomsWrapper
