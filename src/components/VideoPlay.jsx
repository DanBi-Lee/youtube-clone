import React, { useEffect } from 'react';
import { useVideoDispatch, youtube } from '../VideoContext';
import ListByCondition from './ListByCondition';
import styles from './VideoPlay.module.css';
import VieoPlayer from './VieoPlayer';

function VideoPlay ({state, videoId}) {
    const dispatch = useVideoDispatch();
    useEffect(()=>{
        if(!state.now_play){
            youtube.getVideo(videoId, dispatch);
        }
    },[state, videoId, dispatch]);

    if(!state.now_play){
        return (
            <div>
                로딩중
            </div>
        );
    }
    console.log(state.now_play);
  return (
      <div className={styles.wrap}>
        <section className={styles.videoBox}>
            <div className={styles.player}>
            <VieoPlayer videoId={videoId} />
            </div>
            <div className={styles.info}>
                <p className={styles.title}>
                    {state.now_play.snippet.title}
                </p>
                <pre className={styles.description}>
                    {state.now_play.snippet.description}
                </pre>
            </div>
        </section>
        <ListByCondition state={state} />
      </div>
  );
}

export default VideoPlay;