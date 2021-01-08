import React, { useEffect } from 'react';
import { useVideoDispatch, useVideoState, youtube } from '../VideoContext';
import VideoList from './VideoList';

function PopularList () {
    const dispatch = useVideoDispatch();
    const {videoList : {popular}} = useVideoState();
    useEffect(()=>{
      youtube.mostPopular(dispatch);
    }, [dispatch]);

  return (
    <VideoList videoList={popular} title="인기 동영상" />
  );
}

export default PopularList;