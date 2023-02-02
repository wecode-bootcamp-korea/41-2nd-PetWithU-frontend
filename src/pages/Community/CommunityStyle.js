import styled from 'styled-components';

export const Community = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 50px;
  position: relative;
  .goTo {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    color: ${props => props.theme.pointColor};
  }
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

export const InputFileStyle = styled.input`
  display: none;
`;
export const LabelFileStyle = styled.label`
  width: 425px;
  font-size: 1rem;
  text-align: center;
  background-color: ${props => props.theme.pointColor};
  opacity: 0.7;
  color: rgb(243, 234, 221);
  border: none;
  border-radius: ${props => props.theme.radius};
  margin-top: 20px;
  margin-right: 20px;
  padding: 20px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
export const CommunityBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 50px;
`;
export const ImgContainer = styled.div`
  width: 500px;
  height: 500px;
  border: 2px dotted ${props => props.theme.pointColor};
  border-radius: ${props => props.theme.radius};
  overflow: hidden;
  position: relative;

  .trashIcon {
    font-size: 30px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: rgb(243, 234, 221);
  }
`;
export const CommunityImg = styled.img`
  /* object-fit: cover; */
`;
export const PlusItem = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(243, 234, 221);
  position: absolute;
  left: 0;
  top: 0;
`;
export const Search = styled.div`
  width: 200px;
  background-color: #fff;
  border-radius: ${props => props.theme.radius};
  padding: 5px;
  z-index: 100;
  position: absolute;
  display: ${props => (props.primery ? 'none' : 'block')};
`;
export const SearchInputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-bottom: 10px;
`;
export const SearchList = styled.ul``;
export const SearchListItem = styled.li``;

export const CommunityFormContainer = styled.div`
  width: 300px;
  height: 500px;
  margin-left: 50px;
  position: relative;

  .dropDown {
    font-size: 2rem;
  }
`;

export const CommunityForm = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.pointColor};
  background-color: ${props => (props.primery ? '' : props.theme.pointColor)};
  color: ${props => (props.primery ? 'black' : 'rgb(243, 234, 221)')};
  cursor: pointer;
  position: relative;
  border-radius: ${b => b.theme.radius};
`;
export const CommunityP = styled.p`
  padding: 5px;
`;
export const CommunityList = styled.ul`
  width: 100%;
  display: ${props => (props.primery ? 'block' : 'none')};
  position: absolute;
  top: 30px;
  background-color: rgb(243, 234, 221);
  left: 0;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  border: 1px solid ${props => props.theme.pointColor};
  border-bottom: none;
`;
export const CommunityListItem = styled.li`
  border-bottom: 1px solid ${props => props.theme.pointColor};

  padding: 8px;
  &:hover {
    background-color: ${props => props.theme.pointColor};
    color: rgb(243, 234, 221);
  }
`;

export const CommunityText = styled.textarea`
  outline: none;
  font-family: inherit;
  border: 1px solid ${props => props.theme.pointColor};
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-top: 10px;
  resize: none;
  border-radius: ${props => props.theme.radius};
`;
export const CommunityTextBox = styled.div``;
export const CommunityTextList = styled.ul``;
export const CommunityTextListItem = styled.li``;
export const CommunityBtnBox = styled.div`
  display: flex;
`;

export const CommunityBtn = styled.button`
  margin-top: 20px;
  width: 425px;
  border: none;
  background-color: ${props => props.theme.pointColor};
  opacity: 0.7;
  color: rgb(243, 234, 221);
  padding: 20px;
  font-size: 1rem;
  border-radius: ${props => props.theme.radius};
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const AddBtn = styled.button`
  position: absolute;
  font-size: 1rem;
  bottom: 0;
  right: 0;
  padding: 10px 40px;
  border: none;
  background-color: ${props => props.theme.pointColor};
  border-radius: ${props => props.theme.radius};
  color: rgb(243, 234, 221);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const HashTagInput = styled.input`
  background-color: ${props => props.theme.pointColor};
  color: rgb(243, 234, 221);
  min-width: 70px;
  opacity: 0.4;
  margin-top: 10px;
  padding: 6px 10px;
  border: none;
  outline: none;
  border-radius: ${props => props.theme.radius};
  display: inline;
`;
export const HashTagList = styled.ul`
  display: inline;
`;
export const HashTagListItems = styled.li``;
