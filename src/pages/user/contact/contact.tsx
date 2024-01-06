import React, { useEffect } from 'react';
import './contact.scss';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='contact'></div>
  );
}

export default Contact;
