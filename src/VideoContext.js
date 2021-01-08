import React, { createContext, useContext, useReducer } from 'react';
import Youtube from './service/youtube';
export const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
console.log(youtube.getRequestOptions);

const initialVideos = {
    videoList : {
        search : [],
        popular : []
    },
    now_play : ''
};

function videoReducer(state, action){
    switch (action.type){
        case "getPopular" :
            return {...state, videoList : { ...state.videoList, popular : action.list }};
        case "getSearch" :
            return {...state, videoList : { ...state.videoList, search : action.list }};
        default :
            throw new Error(`정의되지 않은 action 타입입니다 : ${action.type}`);
    }
}

const VideoStateContext = createContext();
const VideoDispatchContext = createContext();

export function VideoProvider({children}){
    const [state, dispatch] = useReducer(videoReducer, initialVideos);

    return (
        <VideoStateContext.Provider value={state}>
            <VideoDispatchContext.Provider value={dispatch}>
                {children}
            </VideoDispatchContext.Provider>
        </VideoStateContext.Provider>
    );
}

export function useVideoState() {
    const context = useContext(VideoStateContext);
    if(!context){
        throw new Error('VideoProvider를 찾을 수 없습니다.');
    }
    return context;
}

export function useVideoDispatch(){
    const context = useContext(VideoDispatchContext);
    if(!context){
        throw new Error('VideoProvider를 찾을 수 없습니다.');
    }
    return context;
}