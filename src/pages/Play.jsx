import React from 'react';
import Footer from '../components/Footer';
import HeaderSub from '../components/HeaderSub';
import VideoPlay from '../components/VideoPlay';
import { useVideoState } from '../VideoContext';

function Play ({match}) {
  const state = useVideoState();
  const videoId = match.params.id;
  // 만약에 바로 들어온 video정보가 있으면 그걸 사용
  // 없으면 파라미터 id값을 조회해서 검색후 사용
  // id가 없으면 찾는 동영상은 없다고 표기
  console.log(state);
  return (
      <>
          <HeaderSub />
          <VideoPlay state={state} videoId={videoId} />
          <Footer />
      </>
  );
}

export default Play;