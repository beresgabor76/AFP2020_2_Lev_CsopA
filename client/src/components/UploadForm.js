import React, {useState, useEffect} from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const EMPTY = {
  artist: '',
  title: '',
  album: '',
  language: '',
  lyricsOriginal: '',
  lyricsHungarian: ''
}

const UploadForm = ({onSubmit}) => {
  
  const [song, setSong] = useState(EMPTY);

  useEffect(() => { setSong(song); }, [song]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({...song, [name]: value});    
  }

  const handleSubmit = () => {     
    onSubmit(song);
  }

  return(
    <>    
    <Form variant="primary" style={{width: 500, margin: 50}}>
      <Form.Group controlId="artist" >
        <Form.Label>Előadó</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Előadó neve" 
          name="artist"
          value={song.artist}
          onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="title">
        <Form.Label>Cím</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Dal címe eredeti nyelven" 
          name="title"
          value={song.title}
          onChange={handleChange}/>        
      </Form.Group>
      <Form.Group controlId="album">
        <Form.Label>Album</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Album címe" 
          name="album"
          value={song.album}
          onChange={handleChange}/>        
      </Form.Group>
      <Form.Group controlId="language">
        <Form.Label>Dalszöveg eredeti nyelve</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="pl. angol" 
          name="language"
          value={song.language}
          onChange={handleChange}/>        
      </Form.Group>
      <Table style={{width: 1000, border: 0}}>
        <tbody>
          <tr>
            <td>
              <Form.Group controlId="lyricsOriginal">
                <Form.Label>Eredeti dalszöveg</Form.Label>
                <Form.Control as="textarea" rows={25}
                  name="lyricsOriginal" value={song.lyricsOriginal} 
                  onChange={handleChange} />
              </Form.Group>
            </td>
            <td>
              <Form.Group controlId="lyricsHungarian">
                <Form.Label>Dalszöveg magyar nyelven</Form.Label>
                <Form.Control as="textarea" rows={25} 
                  name="lyricsHungarian" value={song.lyricsHungarian}
                  onChange={handleChange} />
              </Form.Group>
            </td>
          </tr>
        </tbody>
      </Table>      
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Feltöltés
      </Button>
    </Form>
    </>     
  )
}

export default UploadForm;