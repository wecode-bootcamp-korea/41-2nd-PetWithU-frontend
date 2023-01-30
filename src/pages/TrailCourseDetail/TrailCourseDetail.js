import React, { useEffect, useState } from 'react';
import TrailCourseComment from './TrailCourseComment';
import * as T from './TrailCourseDetail.styles';
import TrailCourseMap from './TrailCourseMap';
import TrailCourseDetailRight from './TrailCourseDetailRight';

import TrailCourseDetailContent from './TrailCourseDetailContent';
import { IoMdPin } from 'react-icons/io';

function TrailCourseDetail() {
  const [locationInfo, setLocationInfo] = useState({});
  const [scrapNumber, setScrapNumber] = useState();
  const [likeNumber, setLikeNumber] = useState();
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('/data/TrailCourseDetailData.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       setLocationInfo(result);
  //       setScrapNumber(Number(result.postInfo.collectionCount));
  //       setLikeNumber(Number(result.postInfo.likeCount));
  //       setCommentList(result.postReviews);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://3.38.247.226:3000/promenade/detail/6', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    })
      .then(res => res.json())
      .then(result => {
        setLocationInfo(result);
        setScrapNumber(Number(result.postInfo.collectionCount));
        setLikeNumber(Number(result.postInfo.likeCount));
        setCommentList(result.postReviews);
        setLoading(false);
      });
  }, []);

  const commentFetch = inputValue => {
    fetch('http://3.38.247.226:3000/promenade/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
      body: JSON.stringify({
        postId: 6,
        content: inputValue,
      }),
    }).then(
      fetch('http://3.38.247.226:3000/promenade/detail/6', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
        },
      })
        .then(res => res.json())
        .then(result => {
          setCommentList(result.postReviews);
        })
    );
  };

  // const postComment =  => {
  //   // const copy = [...commentList];
  //   // const newId = copy.length > 0 ? commentList.slice(-1)[0].id + 1 : 1;
  //   // copy.push({
  //   //   id: newId,
  //   //   userProfileImg: '/images/TrailCourseImg/trail1.jpg',
  //   //   username: '나나바나나',
  //   //   content: commentText,
  //   // });
  //   // setCommentList(copy);

  //   const commentFetch = inputValue => {
  //     fetch('http://3.38.247.226:3000/promenade/review', {
  //       headers: {
  //         Authorization:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
  //       },
  //       body: JSON.stringify({
  //         postId: 6,
  //         content: inputValue,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(result => {
  //         setCommentList(result);
  //       });
  //   };
  // };

  const commentNumber = commentList.length;

  // fetch 할 때 해당 포스트 id 만 뽑아서 요청 (id 는 List 컴포넌트에서 받아오기)

  if (loading) return <h1>Loading</h1>;

  // loading state 사용해서 loading 이 true 일 때 Loading 보여주기 / return 으로 렌더링 한 번 끊기

  const { postInfo, postMaps, postContent } = locationInfo;

  const {
    postId,
    nickname,
    profileImage,
    createdAt,
    city,
    arrondissement,
    title,
    thumbnail,
  } = postInfo;

  const { text, locationID, Lat, Lng } = postMaps[0];

  const handleScrapNumber = newScrapNumber => {
    setScrapNumber(newScrapNumber);
  };

  const handleLikeNumber = newLikeNumber => {
    setLikeNumber(newLikeNumber);
  };

  const displayedAt = createdAt => {
    const timeValue = new Date(createdAt);
    const milliSeconds = new Date() - timeValue;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  // const onDelete = id => () => {
  //   let copy = [...commentList];
  //   const filterComment = copy.filter(item => item.id !== id);
  //   setCommentList(filterComment);
  // };

  // const token = localStorage.getItem('accessToken');

  return (
    <>
      <T.ThumbnailBox>
        <T.Thumbnail src={thumbnail} />
      </T.ThumbnailBox>
      <T.DetailContentWrapper>
        <TrailCourseDetailRight
          postId={postId}
          handleScrapNumber={handleScrapNumber}
          handleLikeNumber={handleLikeNumber}
          scrapNumber={scrapNumber}
          likeNumber={likeNumber}
          commentNumber={commentNumber}
        />
        <T.DetailContentHeader>
          <T.DetailCategory>
            {city}&nbsp;{arrondissement}
          </T.DetailCategory>
          <T.DetailTitle>{title}</T.DetailTitle>
          <T.UserInfo>
            <T.ProfileImg src={profileImage} />
            <T.UserInfoRight>
              <T.UserNickname>{nickname}</T.UserNickname>
              <T.IssueDate>{displayedAt(createdAt)}</T.IssueDate>
            </T.UserInfoRight>
          </T.UserInfo>
        </T.DetailContentHeader>
        <T.DetailContent>
          <T.LocationDetail>
            <IoMdPin />
            <T.LocationName>{text}</T.LocationName>
          </T.LocationDetail>
          <T.DetailContentMap>
            <TrailCourseMap
              id={locationID}
              Lat={Number(Lat)}
              Lng={Number(Lng)}
            />
          </T.DetailContentMap>
          {postContent?.map(({ id, content, imageUrl }) => {
            return (
              <TrailCourseDetailContent
                key={id}
                img={imageUrl}
                text={content}
              />
            );
          })}
          <T.DetailContentBottom>
            좋아요&nbsp;{likeNumber}&nbsp;.&nbsp;스크랩&nbsp;
            {scrapNumber}
            &nbsp;.&nbsp;댓글&nbsp;{commentNumber}
          </T.DetailContentBottom>
          <T.UserInfoBottom>
            <T.UserInfo>
              <T.ProfileImg src={profileImage} />
              <T.UserInfoRight>
                <T.UserNickname>{nickname}</T.UserNickname>
                <T.IssueDate>{displayedAt(createdAt)}</T.IssueDate>
              </T.UserInfoRight>
            </T.UserInfo>
          </T.UserInfoBottom>
        </T.DetailContent>
        <TrailCourseComment
          commentList={commentList}
          commentNumber={commentNumber}
          commentFetch={commentFetch}
        />
      </T.DetailContentWrapper>
    </>
  );
}

export default TrailCourseDetail;
