import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useVideoState } from '../VideoContext';
import VideoList from './VideoList';

function SearchList () {
    const history = useHistory();
    const {location} = history;
    const {videoList: {search}} = useVideoState();

    useEffect(()=>{
        console.log(location);
    }, [location]);

  return (
      <VideoList videoList={search} title={`검색 결과`} />
  );
}

export default SearchList;