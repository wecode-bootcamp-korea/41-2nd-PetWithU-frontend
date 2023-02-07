import styled from 'styled-components';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  width: 100vw;
`;
export const MainImgBox = styled.div`
  width: 100vw;
  height: 500px;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TodayItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 40px 20px 0px 20px;
`;

export const TodayItemWrap = styled.div`
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListTitle = styled.p`
  font-size: 40px;
  margin-bottom: 50px;
`;

export const ItemList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const AllItemBox = styled.div`
  width: 100vw;
  padding: 40px 60px 0px 60px;
`;

export const AllItemListWrap = styled.div`
  padding: 0px 100px 0px 100px;
`;

export const TodayItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 10px;
  margin: 0px 20px 30px 20px;
`;

export const AllItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  padding: 10px;
  margin: 0px 20px 30px 20px;
`;

export const ItemImg = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ItemTitle = styled.p`
  font-size: 30px;
`;
export const ItemPrice = styled.p`
  font-size: 25px;
`;
