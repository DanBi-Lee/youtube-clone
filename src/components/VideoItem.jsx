import React from 'react';

function VideoItem ({video}) {
  return (
      <li>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <p>{video.snippet.title}</p>
      </li>
  );
}

export default VideoItem;