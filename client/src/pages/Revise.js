import React, { useState, useEffect } from 'react';
import NavbarUser from '../components/NavbarUser';
import NavbarHome from '../components/NavbarHome';
import ReviseList from '../components/ReviseList';
import { getLyricsToRevise, isUser } from '../actions';

const Revise = () => {

  const [hitList, updateHitList] = useState([]);

  useEffect(() => {
    async function lyricsToRevise(){
      const token = sessionStorage.getItem('lyricsToken');
      let response = await getLyricsToRevise(token);            
      if (response?.data.status === 200)
        updateHitList(response.data.message);              
      else if (response?.data.status === 401){
        window.alert('Sikertelen letöltés hiányzó, lejárt vagy érvénytelen token miatt. ' +
                    'Kérem jelentkezzen be a letöltéshez!');
        window.location.href = '/home';
      }
      else 
        window.alert('Hiba történt a letöltés során.');
    }
    lyricsToRevise();
  },[])

  return(
    <>
    { isUser() && hitList.length > 0 ?     
    <>
      <NavbarUser/> 
      <ReviseList hits={hitList}/>
    </> :
      isUser() ? 
    <>
      <NavbarUser/> 
      <p className="ml-5 mt-5"><strong>Jelenleg nincs javításra váró dalszövege.</strong></p>
    </> :
    <>
      <NavbarHome/>
    </> }
    </>
  )
}

export default Revise;