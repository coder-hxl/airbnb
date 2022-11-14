import styled from 'styled-components'

const LongForItemWrapper = styled.div`
  flex-shrink: 0;
  padding: 10px 8px;
  width: 20%;

  .inner {
    position: relative;
    border-radius: 2px;
    overflow: hidden;

    .cover {
      width: 100%;
    }

    .cover-shade {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 33%;
      background: linear-gradient(0deg, #271d08, rgba(0, 0, 0, 0));
    }

    .info {
      position: absolute;
      bottom: 26px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-weight: 600;
      color: #ffffff;

      .city {
        margin-bottom: 4px;
        font-size: 18px;
      }
    }
  }
`

export default LongForItemWrapper
