import React from 'react';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';
import Main from '../components/Main'

function Home ({videoList, getVideoList}) {
  return (
      <>
          <HeaderMain />
          <Main videoList={videoList} getVideoList={getVideoList} />
          <Footer />
      </>
  );
}

export default React.memo(Home);