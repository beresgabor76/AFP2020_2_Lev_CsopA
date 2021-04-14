import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Table } from 'react-bootstrap';

const HitsList = ({hits}) => {  
  
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
    <Table className="ml-5 mt-5" striped bordered hover style={{width: 800}}>
      <thead>
        <tr>                
          <th></th>
          <th>Előadó</th>
          <th>Dal címe</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>        
        {hits.map((hit) =>
          <tr key={hit._id}>          
            <td><input id={hit._id} type='radio' name='id' value={hit._id}
              onChange={event => handleChange(event)}/></td> 
            <td>{hit.artist}</td>
            <td>{hit.title}</td>
            <td>{hit.album}</td>        
          </tr>)}      
      </tbody>
    </Table>
    <Link id='download' to={`/lyrics/${selectedRowId}`} 
          className="btn btn-primary ml-5 mb-5">
      Letöltés
    </Link>
    </>
    )}
  else
    return <></>;
}

export default HitsList;