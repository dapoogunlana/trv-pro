import React, { useEffect, useRef, useState } from 'react';
import './home.scss';

function About(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[props]);
  
  return (
    <div className='home'>
      <h1>Home Page</h1>
    </div>
  );
}

export default About;
