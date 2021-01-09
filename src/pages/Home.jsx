import React from 'react';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';
import SearchBoxMain from '../components/SearchBoxMain';
import PopularList from '../components/PopularList';

function Home () {
  return (
      <>
          <HeaderMain />
          <SearchBoxMain />
          <PopularList />
          <Footer />
      </>
  );
}

export default React.memo(Home);