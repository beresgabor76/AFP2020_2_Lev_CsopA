import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import NavbarHome from '../components/NavbarHome';
import InspectList from '../components/InspectList';
import { getLyricsToInspect, isAdmin } from '../actions';

const Inspect = () => {

  const [hitList, updateHitList] = useState([]);

  useEffect(() => {
    async function lyricsToInspect(){
      const token = sessionStorage.getItem('lyricsToken');
      let response = await getLyricsToInspect(token);      
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
    lyricsToInspect();
  },[])

  return(
    <>
    { isAdmin() && hitList.length > 0 ?     
    <>
      <NavbarAdmin/> 
      <InspectList hits={hitList}/>
    </> :
      isAdmin() ? 
    <>
      <NavbarAdmin/> 
      <p className="ml-5 mt-5"><strong>Jelenleg nincs ellenőrzésre váró dalszöveg.</strong></p>
    </> :
    <>
      <NavbarHome/>
    </> }
    </>
  )
}

export default Inspect;