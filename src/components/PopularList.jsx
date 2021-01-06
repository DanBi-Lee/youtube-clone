import React, { useEffect } from 'react';
import { useVideoDispatch, useVideoState } from '../VideoContext';
import VideoList from './VideoList';


function PopularList () {
    const dispatch = useVideoDispatch();
    const {videoList : {search}} = useVideoState();
    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'manual'
          };
          fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=kr&key=AIzaSyCeZPZsKwxQDGej8O0x-qaaxbWo2_j28Ho", requestOptions)
            .then(response => response.json())
            .then(result => dispatch({type: 'getPopular', list: result.items}))
            .catch(error => console.log('error', error));
    }, [dispatch]);

  return (
    <VideoList videoList={search} title="인기 동영상" />
  );
}

export default PopularList;