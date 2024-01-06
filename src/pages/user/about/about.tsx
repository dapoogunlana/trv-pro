import React, { useEffect } from 'react';
import './about.scss';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='about'></div>
  );
}

export default Home;
