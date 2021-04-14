import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarHome from '../components/NavbarHome';
import NavbarUser from '../components/NavbarUser';
import NavbarAdmin from '../components/NavbarAdmin';
import { getLyricsById, isUser, isAdmin } from '../actions';
import { Table, Button } from 'react-bootstrap';
import Parser from 'html-react-parser';

const Lyrics = () => {
  
  const { id } = useParams();
  
  const [lyrics, updateLyrics] = useState({"lyricsOriginal" : "Letöltés folyamatban",
                                          "lyricsHungarian" : ""});
  
  useEffect(() => {
    async function getLyrics(id) {    
      var response = await getLyricsById(id);      
      if (response?.data.status === 200){    
        response.data.message.lyricsOriginal = response.data.message.lyricsOriginal.replace(/\n/g,"<br>");
        response.data.message.lyricsHungarian = response.data.message.lyricsHungarian.replace(/\n/g,"<br>");
        if (lyrics.lyricsHungarian === "")
          updateLyrics(response.data.message);
        else
          return;         
      }
      else if (response?.data.status === 404)
        window.alert('A kiválasztott dalszöveg nem található.');
      else
        window.alert('Elnézést kérünk. Hiba történt a kiszolgáló oldalon.');
      }    
      getLyrics(id); }, []);

  const goBack = () => {
    window.history.back();
  }
  
  return (    
    <>    
       {isUser() ? <NavbarUser/> : isAdmin() ? <NavbarAdmin/> : <NavbarHome/> }
      <Table className="ml-5 mt-5" style={{width: 1000, border: 0}}>
      <tbody>
        <tr>
          <td><>{Parser(String(lyrics.lyricsOriginal))}</></td>
          <td><>{Parser(String(lyrics.lyricsHungarian))}</></td>
        </tr>
      </tbody>
      </Table>   
      <Button id="refuse" type="button" onClick={goBack} 
            className="ml-5 mt-2 mb-5" variant="primary">
      Vissza az előző oldalra
    </Button> 
    </>
   )
}

export default Lyrics;