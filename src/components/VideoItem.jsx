import React from 'react';
import { useHistory } from 'react-router-dom';
import { useVideoDispatch } from '../VideoContext';

function VideoItem ({video}) {
  const {snippet} = video;
  const dispatch = useVideoDispatch();
  const history = useHistory();
  const playVidoe = ()=> {
    dispatch({type:"setVideo", video });
    const {id} = video;
    history.push(`/play/${typeof id === "object" ? id.videoId : id}`);
  }

  return (
      <li onClick={playVidoe}>
          <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
          <p>{snippet.title}</p>
          <p>{snippet.channelTitle}</p>
      </li>
  );
}

export default VideoItem;