import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useVideoDispatch, useVideoState } from '../VideoContext';
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
      console.log('test');
        const requestOptions = {
            method: 'GET',
            redirect: 'manual'
          };
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query.keyword}&key=AIzaSyB9JUhtk7dNSNRlU3TwZdSInk-W3_dg_Ro&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => dispatch({type: "getSearch" , list: result.items}))
            .catch(error => console.log('error', error));
    }, [query, dispatch]);

  return (
      <VideoList videoList={search} title={`${query.keyword} 검색 결과`} />
  );
}

export default SearchList;