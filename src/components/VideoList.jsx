import React from 'react';
import styles from './VideoList.module.css';
import VideoItem from './VideoItem';

function VideoList ({videoList, title}) {
    if(!videoList){
        return <div>API오류</div>;
    }
  return (
      <section className={styles.main}>
          <h1>{title}</h1>
          <ul className={styles.videolist}>
                {
                    videoList.map(item=> <VideoItem key={item.etag} video={item} />)
                }
                {/* <li>
                    <img src="https://i.ytimg.com/vi/EjTJwEPPiCc/mqdefault.jpg" alt=""/>
                    <p>[2020 MBC 가요대제전] 비 X 박진영 - 나로 바꾸자 (RAIN X JYP - Switch to me), MBC 201231 방송</p>
                </li> */}
          </ul>
      </section>
  );
}

export default VideoList;