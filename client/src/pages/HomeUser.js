import React from 'react';
import NavbarHome from '../components/NavbarHome';
import NavbarUser from '../components/NavbarUser';
import NavbarAdmin from '../components/NavbarAdmin';
import Statistics from '../components/Statistics';
import { isUser, isAdmin } from '../actions';

const HomeUser = () => {  
  return (    
    <> 
      {isUser() ? <NavbarUser/> : isAdmin() ? <NavbarAdmin/> : <NavbarHome/> }       
      <Statistics/>          
    </>
   )
}

export default HomeUser;