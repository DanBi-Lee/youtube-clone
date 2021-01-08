import React from 'react';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';
import SearchBoxMain from '../components/SearchBoxMain';
import PopularList from '../components/PopularList';
import { Link } from 'react-router-dom';

function Home () {
  return (
      <>
          <HeaderMain />
          <Link to="./play" >테스트 코드</Link>
          <SearchBoxMain />
          <PopularList />
          <Footer />
      </>
  );
}

export default React.memo(Home);