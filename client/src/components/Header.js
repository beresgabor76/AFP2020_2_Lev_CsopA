import React from 'react';
import '../index.scss';

const Header = () => {

  return(
    <>
    <img      
      className="d-block mx-auto img-fluid"
      style={{width: '800px'}}
      alt="Lyrics header"      
      src={process.env.PUBLIC_URL + '/header.jpg'} />
    </>
  );
}

export default Header;