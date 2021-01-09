import React from 'react';
import PopularList from './PopularList';
import VideoList from './VideoList';

function ListByCondition ({state}) {
    // searchList있으면 그거 없으면 인기
    if(state.videoList.search.length === 0){
        return <PopularList />
    }else{
        return <VideoList videoList={state.videoList.search} />
    }
}

export default ListByCondition;