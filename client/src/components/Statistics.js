import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { getLatestLyrics, getPopularLyrics } from '../actions'

const Statistics = () => {  
  
  const [latest, updateLatest] = useState([]);
  const [popular, updatePopular] = useState([]); 
  
  useEffect(() => { 
    async function latestLyrics(){
      let response = await getLatestLyrics();      
      if (response?.data.status === 200)
        updateLatest(response.data.message);
      else
        window.alert('Elnézést kérünk. Hiba történt a kiszolgáló oldalon.'); 
      }
    async function popularLyrics(){
      let response = await getPopularLyrics();      
      if (response?.data.status === 200)
        updatePopular(response.data.message);
      else
        window.alert('Elnézést kérünk. Hiba történt a kiszolgáló oldalon.'); 
      }
      latestLyrics();
      popularLyrics();
  },[]);
      
  return (
    <>        
    <Table className="ml-5 mt-5" striped bordered hover style={{width: 800}}>
      <thead>
        <tr><td colspan="3"><strong>Legújabb dalszövegeink</strong></td></tr>
        <tr>                
          <th>Előadó</th>
          <th>Dal címe</th>
          <th>Feltöltés ideje</th>
        </tr>
      </thead>
      <tbody>        
        {latest.map((hit) =>
          <tr key={hit._id}>                       
            <td>{hit.artist}</td>
            <td>{hit.title}</td>
            <td>{hit.dateOfUpload.substr(0, 16)}</td>        
          </tr>)}      
      </tbody>
    </Table>    
    <Table className="ml-5 mt-5" striped bordered hover style={{width: 800}}>
      <thead>
        <tr><td colspan="3"><strong>Legnépszerűbb dalszövegeink</strong></td></tr>
        <tr>               
          <th>Előadó</th>
          <th>Dal címe</th>
          <th>Letöltések száma</th>
        </tr>
      </thead>
      <tbody>        
        {popular.map((hit) =>
          <tr key={hit._id}>                       
            <td>{hit.artist}</td>
            <td>{hit.title}</td>
            <td>{hit.timesOfDownload}</td>        
          </tr>)}      
      </tbody>
    </Table>    
    </>
  )  
}

export default Statistics;