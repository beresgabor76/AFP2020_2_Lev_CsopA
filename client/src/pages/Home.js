import React from 'react';
import NavbarHome from '../components/NavbarHome';
import Statistics from '../components/Statistics';

const Home = () => {
  sessionStorage.removeItem('lyricsToken');
  return (    
    <> 
      <NavbarHome/>
      <Statistics/>          
    </>
   )
}

export default Home;