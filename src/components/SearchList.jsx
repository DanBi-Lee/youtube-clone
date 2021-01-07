import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useVideoDispatch, useVideoState, youtube } from '../VideoContext';
import VideoList from './VideoList';
import qs from 'qs';

function SearchList () {
    const history = useHistory();
    const {location} = history;
    const {videoList: {search}} = useVideoState();
    const query = useMemo(() => qs.parse(location.search, {
        ignoreQueryPrefix : true
    }), [location]);
    const dispatch = useVideoDispatch();

    useEffect(()=>{
      youtube.search(query, dispatch);
    }, [query, dispatch]);

  return (
      <VideoList videoList={search} title={`${query.keyword} 검색 결과`} />
  );
}

export default SearchList;