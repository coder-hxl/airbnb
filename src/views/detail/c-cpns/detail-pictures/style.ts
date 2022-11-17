import styled from 'styled-components'

const DetailPicturesWrapper = styled.div`
  display: flex;
  height: 600px;
  overflow: hidden;

  :hover {
    .cover {
      opacity: 1 !important;
    }
  }

  .item {
    position: relative;
    overflow: hidden;
    border: 1px solid #000;

    :hover {
      img {
        transform: scale(1.1);
      }
      .cover {
        opacity: 0 !important;
      }
    }

    img {
      width: 100%;
      height: 100%;
      transition: transform 500ms ease;
      object-fit: cover;
    }

    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      transition: opacity 500ms ease;
      opacity: 0;
    }
  }

  .left {
    flex: 1;

    .item {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
    }
  }
`

export default DetailPicturesWrapper
