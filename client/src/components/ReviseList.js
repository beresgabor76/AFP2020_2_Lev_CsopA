import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Table } from 'react-bootstrap';

const ReviseList = ({hits}) => {  
  
  const [selectedRowId, changeSelection] = useState(0);
 
  const handleChange = (e) => {    
    const { value } = e.target;
    changeSelection(value);     
  } 
  
  useEffect(() => { if (hits.length > 0 && selectedRowId === 0){                   
                        changeSelection(hits[0]._id);
                        document.getElementById(hits[0]._id).checked = true; }}); 
  
  if (hits.length > 0){          
    
    return (
    <>        
    <Table className="ml-5 mt-5" striped bordered hover style={{width: 1000}}>
      <thead>
        <tr>                
          <th></th>
          <th>Előadó</th>
          <th>Dal címe</th>
          <th>Nyelve</th>
          <th>Feltöltés ideje</th>
          <th>Ellenőr</th>
        </tr>
      </thead>
      <tbody>        
        {hits.map((hit) =>
          <tr key={hit._id}>          
            <td><input type='radio' id={hit._id} name='id' value={hit._id}
              onChange={e => handleChange(e)}/></td> 
            <td>{hit.artist}</td>
            <td>{hit.title}</td>
            <td>{hit.language}</td>
            <td>{hit.dateOfUpload.substr(0,16)}</td>
            <td>{hit.inspector}</td>
          </tr>)}      
      </tbody>
    </Table>
    <Link id='revise' to={`/revise/${selectedRowId}`} 
          className="btn btn-primary ml-5 mb-5">
      Szerkesztés
    </Link>        
    </>
    )}
  else
    return <></>;
}

export default ReviseList;