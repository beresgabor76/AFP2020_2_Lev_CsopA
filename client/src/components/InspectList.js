import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Table, Button, Form } from 'react-bootstrap';
import { putLyricsApprove, putLyricsRefuse } from '../actions';

const InspectList = ({hits}) => {  
  
  const [selectedRowId, changeSelection] = useState(0);
  const [remark, remarkWrite] = useState('');

  const handleChange = (e) => {    
    const { value } = e.target;
    changeSelection(value);     
  } 
  
  useEffect(() => { if (hits.length > 0 && selectedRowId === 0){                   
                        changeSelection(hits[0]._id);
                        document.getElementById(hits[0]._id).checked = true; }}); 
  
  const handleWrite = (e) => {    
    const { value } = e.target;
    remarkWrite(value);
  }

  const approveSelection = async () => {
    let res = window.confirm('Biztosan jóváhagyja a kijelölt dalszöveg fordítását?');
    if (res === true){
      const token = sessionStorage.getItem('lyricsToken');
      let response = await putLyricsApprove(selectedRowId, token);      
      if (response?.data.status === 200){        
        window.location.reload();
      }
      else if (response?.data.status === 401)
        window.alert('Sikertelen letöltés hiányzó, lejárt vagy érvénytelen token miatt. ' +
                    'Kérem jelentkezzen be a letöltéshez!');
      else 
        window.alert('Hiba történt a művelet során.');
    }    
  }

  const refuseSelection = async () => {
    let res = window.confirm('Biztosan visszautasítja a kijelölt dalszöveg fordítását?');
    if (res === true){
      const token = sessionStorage.getItem('lyricsToken');
      let response = await putLyricsRefuse(selectedRowId, remark, token);      
      if (response?.data.status === 200){        
        window.location.reload();
      }
      else if (response?.data.status === 401)
        window.alert('Sikertelen letöltés hiányzó vagy lejárt token miatt. ' +
                    'Kérem jelentkezzen be a letöltéshez!');
      else if (response?.data.status === 400)
        window.alert('Sikertelen letöltés érvénytelen token miatt. ' +
                    'Kérem jelentkezzen be a letöltéshez!');
      else 
        window.alert('Hiba történt a művelet során.');
    }    
  }


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
          <th>Feltöltő</th>
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
            <td>{hit.uploader}</td>
          </tr>)}      
      </tbody>
    </Table>
    <Link id='download' to={`/lyrics/${selectedRowId}`} 
          className="btn btn-primary ml-5 mb-5">
      Ellenőrzés
    </Link>
    <Button id="approve" type="button"  onClick={approveSelection} 
            className="ml-3 mb-5" variant="primary">
      Jóváhagyás
    </Button>
    <Button id="refuse" type="button" onClick={refuseSelection} 
            className="ml-3 mb-5" variant="primary">
      Visszautasítás
    </Button>
    <Form>
      <Form.Group controlId="remark" className="ml-5 w-500">
        <Form.Label>Megjegyzések a fordító számára:</Form.Label>
        <Form.Control as="textarea" rows={5} style={{width: 800}}
                      name="remark" value={remark} onChange={e => handleWrite(e)}/>
      </Form.Group>
    </Form>
    </>
    )}
  else
    return <></>;
}

export default InspectList;