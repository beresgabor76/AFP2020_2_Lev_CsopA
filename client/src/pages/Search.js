import React, {useState} from 'react';
import NavbarHome from '../components/NavbarHome';
import NavbarUser from '../components/NavbarUser';
import NavbarAdmin from '../components/NavbarAdmin';
import { isUser, isAdmin } from '../actions';
import SearchForm from '../components/SearchForm';
import { getSearchLyrics } from '../actions';
import HitsList from '../components/HitsList';

const Search = () => {
  
  const [hitList, updateHitList] = useState([]);

  const searchLyrics = async (song) => {    
    let response = await getSearchLyrics(song);    
    if (response?.data.status === 200){             
      updateHitList(response.data.message);                
    }
    else if (response?.data.status !== undefined)
      window.alert(response.data.message);
    else
      window.alert('Elnézést kérünk. Hiba történt a kiszolgáló oldalon.');
  }  
  
  return (
    <>
      {isUser() ? <NavbarUser/> : isAdmin() ? <NavbarAdmin/> : <NavbarHome/> }        
      <SearchForm onSubmit={searchLyrics}/>
      <HitsList hits={hitList}/> 
    </>
   )
}

export default Search;