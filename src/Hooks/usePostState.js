const usePostState = postId => {
  const postLikes = () => {
    fetch(`http://13.125.223.27:3000/community/like/${postId}`, {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    });
  };
  const postScraps = () => {
    fetch(`http://13.125.223.27:3000/community/like/${postId}`, {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    });
  };
  return [postLikes, postScraps];
};

export default usePostState;
