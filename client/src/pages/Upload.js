import React from 'react';
import NavbarUser from '../components/NavbarUser';
import NavbarHome from '../components/NavbarHome';
import UploadForm from '../components/UploadForm';
import { isUser, postLyrics } from '../actions';

const Upload = () => {
  
  const uploadLyrics = async (song) => {    
    const token = sessionStorage.getItem('lyricsToken');    
    let response = await postLyrics(song, token);    
    if (response?.data.status === 200){
      window.alert(`${response.data.message.artist} előadó ${response.data.message.title} ` + 
      `című zeneszám dalszövege sikeresen feltöltésre került.`);
      window.location.href = '/homeuser';
    }
    else if (response?.data.status === 401){
      window.alert('Sikertelen feltöltés hiányzó, lejárt vagy érvénytelen token miatt. ' +
                  'Kérem jelentkezzen be a feltöltéshez!');
      window.location.href = '/home';
    }
    else if (response?.data.status !== undefined)
      window.alert(response.data.message);
    else 
      window.alert('Hiba történt a feltöltés során.');
  }  
  
  return (
    <>
      {isUser() ?
      <>  
        <NavbarUser/>
        <UploadForm onSubmit={uploadLyrics}/>      
      </>:
        <NavbarHome/>
      }
    </>
   )
}

export default Upload;