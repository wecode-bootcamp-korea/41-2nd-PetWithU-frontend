import styled from 'styled-components';

export const Community = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 50px;
  position: relative;
`;
export const Form = styled.form``;
export const Empty = styled.div`
  width: 500px;
  text-align: center;
  border: 1px solid ${props => props.theme.pointColor};
  padding: 100px 0;
  border-radius: ${props => props.theme.radius};
  .camera {
    font-size: 5rem;
    color: ${props => props.theme.pointColor};
    opacity: 0.6;
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

export const CommunityImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  border: 2px dotted ${props => props.theme.pointColor};
  border-radius: ${props => props.theme.radius};
  /* overflow: hidden; */
  .trashIcon {
    font-size: 30px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: rgb(243, 234, 221);
  }
`;

export const PlusItem = styled.div`
  width: 18px;
  height: 18px;
  text-align: center;
  display: flex;
  align-self: center;
  font-weight: 100;
  justify-content: center;
  background-color: ${props => props.theme.pointColor};
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100%;
  color: rgb(243, 234, 221);
  text-align: center;
  cursor: pointer;
`;
export const Search = styled.div`
  width: 200px;
  height: 200px;
  overflow: scroll;
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

  .x {
    cursor: pointer;
  }
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-bottom: 10px;
`;
export const SearchList = styled.ul``;
export const SearchListItem = styled.li`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;
export const SearchItemImgBox = styled.div`
  margin: 5px 0;
`;
export const SearchItemImg = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
`;
export const SearchItemText = styled.div`
  margin-left: 5px;
  font-size: 12px;
`;

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
export const CommunityTextBox = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 300px;
`;
export const CommunityTextList = styled.ul`
  min-width: 70px;
  background-color: ${props => props.theme.pointColor};
  color: rgb(243, 234, 221);
  opacity: 0.4;
  border: none;
  outline: none;
  padding: 6px 10px;
  margin-top: 10px;
  margin-right: 5px;
  border-radius: ${props => props.theme.radius};
`;
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
  border: none;
  border-radius: ${props => props.theme.radius};
  outline: none;
  margin-top: 10px;
  margin-right: 5px;
  padding: 6px 10px;
`;
export const HashTagList = styled.ul`
  display: inline;
`;
export const HashTagListItems = styled.li``;
