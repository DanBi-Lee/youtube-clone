import React from 'react';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';
import SearchBoxMain from '../components/SearchBoxMain';
import PopularList from '../components/PopularList';
import { VideoProvider } from '../VideoContext';

function Home () {
  return (
      <VideoProvider>
          <HeaderMain />
          <SearchBoxMain />
          <PopularList />
          <Footer />
      </VideoProvider>
  );
}

export default React.memo(Home);