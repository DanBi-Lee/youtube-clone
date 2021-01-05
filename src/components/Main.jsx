import React, { useEffect } from 'react';
import styles from './Main.module.css';
import VideoItem from './VideoItem';

function Main ({videoList, getVideoList}) {
    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'manual'
          };
          
          fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=kr&key=AIzaSyCeZPZsKwxQDGej8O0x-qaaxbWo2_j28Ho", requestOptions)
            .then(response => response.json())
            .then(result => getVideoList(result.items))
            .catch(error => console.log('error', error));
    }, []);

  return (
      <section className={styles.main}>
          <h1>인기 동영상</h1>
          <ul className={styles.videolist}>
                {
                    videoList.map(item=> <VideoItem key={item.id} video={item} />)
                }
                {/* <li>
                    <img src="https://i.ytimg.com/vi/EjTJwEPPiCc/mqdefault.jpg" alt=""/>
                    <p>[2020 MBC 가요대제전] 비 X 박진영 - 나로 바꾸자 (RAIN X JYP - Switch to me), MBC 201231 방송</p>
                </li> */}
          </ul>
      </section>
  );
}

export default Main;