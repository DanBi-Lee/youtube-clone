import React from 'react';
import Footer from '../components/Footer';
import HeaderSub from '../components/HeaderSub';

function Play ({match}) {
  console.log(match);
  return (
      <>
          <HeaderSub />
          <Footer />
      </>
  );
}

export default Play;