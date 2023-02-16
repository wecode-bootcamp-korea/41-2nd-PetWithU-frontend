import styled from 'styled-components';
import theme from '../../styles/theme';
import Slider from 'react-slick';

export const ImgList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const FeedImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

// 슬릭

export const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 100;
    left: 10px;
  }
  .slick-next {
    right: 30px;
  }
  .slick-list {
    //얘로 크기조정 했음
    width: 500px;
    margin: 0 auto;
    background-color: #f0f9ff;
    color: white;
  }

  .slick-prev:before,
  .slick-next:before {
    z-index: 100;
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 0px;
    background-color: white;
    color: black;

    li button:before {
      color: gray;
    }

    li.slick-active button:before {
      color: black;
    }
  }
`;

export const SlideImg = styled.img`
  width: 500px;
  height: 500px;
`;

export const ComentAndTag = styled.div`
  padding-left: 20px;
  margin-top: 10px;
`;

export const PlusItem = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

export const Point = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  text-align: center;
  line-height: 20px;
  left: 0;
  top: 0;
  position: absolute;
  background-color: ${theme.pointColor};
  cursor: pointer;
`;
