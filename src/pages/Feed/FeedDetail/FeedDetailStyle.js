import styled from 'styled-components';

export const FeedDetailContainer = styled.div`
  width: 100%;
  padding: 50px;
  text-align: left;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const FeedDetailMain = styled.div`
  width: 500px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
export const FeedDetailCategory = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  color: #646e75;
`;
export const FeedDetailimgBox = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
`;
export const FeedDetailimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const FeedDetailContentBox = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export const FeedDetailContent = styled.p``;
export const FeedDetailHashTagList = styled.ul`
  width: 100%;
  margin: 20px 0;
`;
export const FeedDetailHashTag = styled.li``;
export const FeedDetailReviewBox = styled.div`
  width: 500px;
  border-radius: ${props => props.theme.radius};
`;
export const FeedDetailReviewInputBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
export const FeedDetailReviewInput = styled.input`
  width: 100%;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: ${props => props.theme.radius};
`;
export const FeedDetailReviewButton = styled.button`
  cursor: pointer;
  background-color: inherit;
  color: #646e75;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
`;
export const FeedDetailReviewList = styled.ul`
  margin: 20px;
  margin-left: 0;
`;
export const FeedDetailReviewListItems = styled.li`
  display: flex;
  margin: 10px 0;
`;
export const FeedDetailReviewListProfile = styled.div`
  width: 30px;
  height: 30px;
`;
export const FeedDetailReviewListProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;
export const FeedDetailReviewListcontentList = styled.ul`
  margin-left: 10px;
`;
export const FeedDetailReviewListcontent = styled.li`
  display: flex;
  flex-flow: column;
`;
export const FeedDetailReviewListcontentNickName = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
`;
export const FeedDetailReviewListcontentText = styled.span``;

export const FeedDetailRight = styled.div`
  width: 200px;
  padding: 50px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  position: fixed;
  top: 100px;
  right: 20px;
`;
export const FeedDetailRightButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  margin-bottom: 50px;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(143, 143, 143, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(143, 143, 143, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(143, 143, 143, 0.75);
`;
