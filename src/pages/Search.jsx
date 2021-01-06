import React from 'react';
import Footer from '../components/Footer';
import HeaderSub from '../components/HeaderSub';
import SearchList from '../components/SearchList';
import { VideoProvider } from '../VideoContext';

function Search () {
  return (
      <VideoProvider>
          <HeaderSub />
          <SearchList />
          <Footer />
      </VideoProvider>
  );
}

export default Search;