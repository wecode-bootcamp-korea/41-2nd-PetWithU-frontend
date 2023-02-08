import styled from 'styled-components';

export const ScrapPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const UserContainer = styled.div`
  width: 100%;
`;

export const ScrapTitle = styled.p`
  margin: 30px 0px 0px 30px;
  font-size: 30px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
export const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const UserId = styled.p`
  font-size: 30px;
`;

export const ScrapMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
`;

export const ScrapMenuList = styled.li`
  margin: 0px 20px;
  font-size: 25px;
  margin-bottom: 10px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const ScrapList = styled.div`
  width: 100%;
`;

export const LikesItemList = styled.ul`
  display: flex;
  padding: 50px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CollectionItemList = styled.ul`
  display: flex;
  padding: 50px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LikesItems = styled.li`
  width: 300px;
  height: 300px;
  margin: 0px 20px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
