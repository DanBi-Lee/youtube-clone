import React from 'react';

function VideoItem ({video}) {
  const {snippet} = video;
  return (
      <li>
          <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
          <p>{snippet.title}</p>
          <p>{snippet.channelTitle}</p>
      </li>
  );
}

export default VideoItem;